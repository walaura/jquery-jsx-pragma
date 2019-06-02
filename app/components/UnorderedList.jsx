import Jreact from '../../jreact/index';

/* takes an array prop 'items' and returns a <ul> element 
   with each item as <li> elements */
const UnorderedList = function({ items }) {
  return (
    <ul>
      {items.map(function(item, i) {
        return <li onClick={()=>{alert('heyoo')}} key={i}>{item}</li>;
      })}
    </ul>
  );
}

export default UnorderedList