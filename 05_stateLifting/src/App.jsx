import { useState } from 'react'
import Card from './components/Card'
import './App.css'

function App() {
  //create state
  //manage state
  const [name, setName] = useState('')

  return (
   <>
    <Card title="card 1" name={name} setName={setName} />
    <Card title="card 2" name={name} setName={setName} />
    <p>I am inside Parent component and my name is {name}</p>
   </>
  )
}

export default App
