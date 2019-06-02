import Jreact, {useState} from '../../jreact/index';
import UnorderedList from './UnorderedList';
import Clock from './Clock';
import Box from './Box';

const dependenciesArray = [
  'express - middleware for the node server',
  'react - for generating the views of the app',
  'react-dom - powers the rendering of elements to the DOM, typically paired with React',
  'webpack - for bundling all the javascript',
  'jsx-loader - allows webpack to load jsx files'
];

const componentsMade = [
  'HelloWorld - which is the view you are seeing now!',
  'UnorderedList - which takes an array of "items" and returns a ~ul~ element with ~li~, elements of each of those items within it',
];

/* the main page for the index route of this app */
const HelloWorld = function() {
  const [counter, setCounter] = useState(0);
  const [otherCounter, setOtherCounter] = useState(0);

  return (
    <x-hw>
      <h1>Hello World!</h1>
      <p>This is a starter <a href="http://glitch.com">Glitch</a> app for JReact! It's based on the normal react starter but it uses JQuery!</p>

      <p>Here's some example interactive components</p>
      <Clock/>
      <Box>
        {counter}
        <button onClick={()=>{
            setCounter(prevState => prevState+1)
          }}>count more</button>
        <button onClick={()=>{
            setCounter(prevState => prevState-1)
          }}>count less</button>
      </Box>
    <Box>
        {otherCounter}
        <button onClick={()=>{
            setOtherCounter(prevState => prevState+1)
          }}>count more</button>
        <button onClick={()=>{
            setOtherCounter(prevState => prevState-1)
          }}>count less</button>
      </Box>
      <hr/>
      <p>All the magic is contained in the <code>jreact</code> folder and there's a small oneliner in <code>.babelrc</code> to replace the jsx pragma </p>
    </x-hw>
  );
}

export default HelloWorld