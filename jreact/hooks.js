import $ from 'jquery'
import {reloadEventname} from './__internals'

const stateCells = [];
let lastHookUsed = 0;

/*
Thanks to the ROOLS OF HOOKS we can be sure the order our useState func tions are called will persist across every render, so the way this works is just by upping a counter and having a global array with all our state
*/
const useState = (def) => {
  const thisHook = lastHookUsed;
  lastHookUsed++;
  const setState = (newState) => {
    if(typeof newState === 'function'){
      stateCells[thisHook][0] = newState(stateCells[thisHook][0]);
    }
    else {
      stateCells[thisHook][0] = newState;
    }
    $(window).trigger(reloadEventname);
  }
  if(!stateCells[thisHook]) {
   stateCells[thisHook] = [def,setState]; 
  }
  return stateCells[thisHook]
}

/*
This is delightfully simple.
We are using an external differ so we have no idea when to call our componentWillUnmount() function, so we just don't do it
*/
const useEffect = (fn, differ) => {
  const [previous, setPrevious] = useState({})
  if(JSON.stringify(differ) !== JSON.stringify(previous)){
    fn();
    setPrevious(differ)
  }
}

const __resetHooks = () => {lastHookUsed = 0;}
const hooks = {useState, useEffect}

export {hooks, __resetHooks}