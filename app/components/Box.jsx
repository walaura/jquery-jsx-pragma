import Jreact from '../../jreact/index';

const Box =  ({children}) => {
  return (
    <div style={{ border: '2px solid #373fff', padding: '1em', margin: '1em 0' }}>
      {children}
    </div>
  )
}

export default Box;