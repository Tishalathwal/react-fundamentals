
import { useEffect, useState,useRef } from 'react'
import './App.css'

function App() {
  const [time,setTime] = useState(0)

  let timeRef = useRef(null);
  function startClick(){
    timeRef.current= setInterval(()=>{
      setTime(time => time+1)
    },1000)
  }

  function stopClick(){
    clearInterval(timeRef.current)
    timeRef.current=null;
  }

  function resetClick(){
    stopClick()
    setTime(0)
  }

  return(
    <div>
      <h1>STOPWATCH: {time}</h1>
      <br />
      <button onClick={startClick}>
          start
      </button>
      <br />
      <br />
      <button onClick={stopClick}>
          stop
      </button>
      <br />
      <br />
      <button onClick={resetClick}>
          reset
      </button>
    </div>
  )






  /*
  const [count,setCount] = useState(0)


  let val = useRef(0)
  useEffect(()=>{
    console.log("re-render")
  })
  function handleClick(){
    val.current= val.current+1
    console.log("value of val is", val.current)
    setCount(count+1)
  }
  return (
    <div>
      <h3>count is {count}</h3>
      <button onClick={handleClick}>
        increment
      </button>
    </div>
  )
  */
}

export default App
