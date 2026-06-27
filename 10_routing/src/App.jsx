
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import ParamComp from './components/ParamComp'
import Number from './components/Number'
import Id from './components/id'
import NotFound from './components/NotFound'

const router = createBrowserRouter(
  [
    {
      path:"/",
      element: 
      <div>
        <Navbar />
        <Home/>
      </div>
    },
    {
      path:"/about",
      element: 
      <div>
        <Navbar />
        <About/>
      </div>
    },
    {
      path:"/contact",
      element: 
      <div>
        <Navbar />
        <Contact/>
      </div>,
      children:[
        {
          path:"number",
          element:<Number/>
        },
        {
          path:"id",
          element:<Id/>
        }
      ]
    },
    {
      path: "/student/:id",
      element: 
      <div>
        <Navbar />
        <ParamComp />
      </div>
    },
    {
      path:'*',
      element:<NotFound/>

    }
]
)
function App() {
  

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
