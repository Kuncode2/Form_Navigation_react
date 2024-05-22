import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout1 from './components/Layout1'
import Formtask from './pages/Formtask'
import Login from './pages/Relogin'
import About from './pages/About'
import Home from './pages/Home'
import Layout2 from './components/Layout2'
import MoreButton from './pages/morebutton'



const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout1/>,
    children:[
      {
        index: true, 
        element: <Home />,
      },
      {
        path:'formtask',
        element:<Formtask/>
      },
      {
        path:'login',
        element:<Login/>
      },
      {
        path:'about',
        element:<About/>
      },
      {
        path:'/',
        element:<Layout2/>,
        children:[{
          path:"morebutton",
          element:<MoreButton/>
        }]
      }
    ],


  }
])

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App

