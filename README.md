JReact
===========================

JReact is a modern declarative Ui framework inspired by React that uses the full power of jQuery under the hood.

```jsx
import Jreact, {render} from 'jreact';

import App from './components/App';

render(() => <App/>, document.getElementById('app'));
```

## Usage
Set your jsx pragma to Jreact in `babelrc`

```js
{
  "presets": [
    "@babel/preset-env", 
    ["@babel/preset-react",{
      "pragma": "Jreact",
      "throwIfNamespace": false 
    }
    ]
  ]
}
```

Then do not use fragments and make sure to escape your html.

You can also use `useState` and `useEffect` hooks.

```jsx
import Jreact, {useState, useEffect} from 'jreact';

const Clock = ({children}) => {
  const [time, setTime] = useState(Date.now())
  useEffect(()=>{
    setInterval(()=>{
      setTime(Date.now())
    },1000)
  },[])
  return (
    <div>
      {new Date(time).getHours()}:
      {new Date(time).getMinutes()}:
      {new Date(time).getSeconds()}
    </div>
  )
}
```
