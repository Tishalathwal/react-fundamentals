
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount]=useState(0);
 /*SYNTAX:
 
 useEffect(() => {

  //first --> side-effect fxn

  return () => {
    // second --> clean-up fxn
  };

}, [third]);   //  third--> dependencies

*/

/*
// variation 1: runs on ever render

useEffect(()=>{
  alert("i will run on each render")
})
*/


/*
// variation 2: run only first render

useEffect(()=>{
  alert("run only on first render")
},[])
*/

/*
//variation 3: run after dependencies update

useEffect(()=>{
  alert("run when count update")
},[count])
*/


//variation 4: here also a clean-up function 

useEffect(() => {

  alert("side effect fxn: Mounted")

  return () => {
    alert("clean-up fxn: unMounted")
  };

}, [count]);  


function handleClick(){
  setCount(count+1);
}

  return (
    <>
    <button onClick={handleClick}>click me</button>
    <br />
    <p>count is {count}</p>
    </>
  )
}

export default App
