import React from 'react'
import { useNavigate } from 'react-router-dom';

function About() {
    const navigate = useNavigate();
    function handleClick(){
        navigate('/contact')
    }
  return (
    <div>
      About page
      <button onClick={handleClick}>
        move to contact
      </button>
    </div>
  )
}

export default About
