import { useState } from 'react'
import './App.css'
import LogoutBtn from './components/LogoutBtn'
import LoginBtn from './components/LoginBtn'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  // VARIATION 4: early returns
    
    if(!isLoggedIn) {
      return <LoginBtn />
    }
    
  return(
    
    <div>
      {/* VARIATION 3: logical && operator */}
      <h1>Welcome everyone</h1>
      <div>
        {isLoggedIn && <LogoutBtn />}
      </div>
    </div>
  )


  // VARIATION 2: ternary operator
  // return (
  // <>
  // {isLoggedIn ? <LogoutBtn /> : <LoginBtn />}
  // </>
  // )



  //VARIATION 1: if-else statement
  // if(isLoggedIn) {
  //   return(
  //     <LogoutBtn />
  //   )
  // }else {
  //   return(
  //     <LoginBtn />
  //   )
  // }
}

export default App
