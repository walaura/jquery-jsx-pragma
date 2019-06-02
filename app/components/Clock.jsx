import Jreact, {useState, useEffect} from '../../jreact/index';
import Box from './Box'

const Clock =  ({children}) => {
  const [time, setTime] = useState(Date.now())
  useEffect(()=>{
    setInterval(()=>{
      setTime(Date.now())
    },1000)
  },[])
  return (
    <Box>
      {new Date(time).getHours()}:
      {new Date(time).getMinutes()}:
      {new Date(time).getSeconds()}
    </Box>
  )
}

export default Clock;