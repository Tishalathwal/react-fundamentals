import { useState, useMemo } from 'react'

function expensiveTask(num) {
  console.log("Inside Expensive Task")
  for (let i = 0; i <= 1000000000; i++) {}
  return num * 2
}

function App() {
  const [count, setCount] = useState(0)

  // useMemo — change only when count will change
  const doubleValue = useMemo(() => {
    return expensiveTask(3)
  }, [])  // [] = run only one time

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <div>
        Count: {count}
      </div>

      <div>
        Double: {doubleValue}
      </div>
    </div>
  )
}

export default App