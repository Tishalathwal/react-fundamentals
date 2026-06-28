
import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from './features/counter/CounterSlice';
import { findNonSerializableValue } from '@reduxjs/toolkit';

function App() {
  
  const[amount,setAmount]= useState(0);
  const count = useSelector((state)=>state.counter.value)
  const dispatch = useDispatch();

  function handleIncrementClick(){
    dispatch(increment());
  }

  function handleDecrementClick(){
    dispatch(decrement());
  }

  function handleResetClick(){
    dispatch(reset());
  }

  function handleAmountClick(){
    dispatch(incrementByAmount(amount))
  }
  return (
    <div className='container'>
      <button onClick={handleIncrementClick}>+</button>
      <p>count: {count}</p>
      <button onClick={handleDecrementClick}>-</button>
      
      <br/>
      <button onClick={handleResetClick}>reset</button>
      <br/>
      <input type="number" value={amount} placeholder='enter number' onChange={(e) => setAmount(e.target.value)}/>
      <br/>
      <button onClick={handleAmountClick}>inc by ammount</button>
    </div>

  )
}

export default App
