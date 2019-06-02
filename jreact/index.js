import $ from 'jquery'
import {DiffDOM} from "diff-dom"
import {hooks, __resetHooks} from "./hooks"
import {reloadEventname} from './__internals'

const dd = new DiffDOM();

/*
this just makes elements
*/
const makeJqElement = (el, props, ...children) => {
  const $element = $(`<${el} />`);
  if(props){
    for (let [prop, value] of Object.entries(props)) {
      if(prop === 'style') {
        $element.css(value)
      }
      else if(prop.substring(0,2) === 'on') {
        $element.on(prop.substring(2).toLowerCase(),value)
      }
      else {
        $element.attr(prop, value)
      }
    }
  }
  for (let child of children) {
    $element.append(child);
  }
  return $element;
}
const createElement = (el, props, ...children) => {
  const $element = typeof el === 'string' ? makeJqElement(el, props, ...children) : el({...props, children})
  return $element;
}

/*
render is the top level call you use to rendeer your app and what it does is it renders the first pass and handles listening for hook updates to rerender the page
*/
const render = ($app, to, d) => {
  __resetHooks();
  if(d){
    const diff = dd.diff(to.children[0], $app()[0]);
    dd.apply(to.children[0], diff);
  }
  else{
    $(to).html($app())
  }

  $(window).one(reloadEventname,()=>{
    render($app, to, true)
  })
}

const {useState, useEffect} = hooks
export {render, $, useState, useEffect}

export default createElement;