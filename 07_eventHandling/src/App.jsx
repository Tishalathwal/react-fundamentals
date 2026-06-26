
import './App.css'

function App() {
   

  return (
   <>

   <form>
      <input type="text" onChange={()=>alert('value change')} />
      <button type="button" onClick={() => alert('Button clicked!')}>
        Submit
      </button>
   </form>
   <p onMouseOver={()=> alert ('para clicked!')}>
      Hey Tisha
   </p>
    <button onClick={() => alert('Button clicked!')}> 
      click me
    </button>
   </>
  )
}

export default App
