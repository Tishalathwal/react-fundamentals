import React from 'react'
// import { UserContext } from '../App'
import { useContext } from 'react'
import { ThemeContext } from '../App'

function ChildC() {
    // const user= useContext(UserContext)
    const {theme,setTheme} = useContext(ThemeContext)

    function handleClick(){
        if(theme==='light')
            setTheme('dark')
        else
            setTheme('light')
    }
  return (
    <div>
       <button onClick={handleClick}>
        change theme
       </button>

      {/* data: {user.name} */}
    </div>
  )
}

export default ChildC
