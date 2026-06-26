import { useState } from 'react';
import './App.css'
import Button from './components/Button';
import Card from './components/Card'

  function App() {
  const [count,setCount] = useState(0);

  function handleClick(){
    setCount(count+1);
  }

  return (
    <div>
      
      <Button handleClick={handleClick} text="click me">
        <h1>{count}</h1>
      </Button>
    

      {/* <Card name='Tisha Lathwal'>
        <h1>React</h1>
        <p>Learning Props Children</p>
        <button>Click Me</button>
      </Card>
      <card children='i am children'>
        <p>i overwrite above children</p>
      </card> */}
    </div>
  );
}


export default App
