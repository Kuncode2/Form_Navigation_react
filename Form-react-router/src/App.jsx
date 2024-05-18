import {BrowserRouter, Form, Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Navbar from "./components/Navbar"
import "./index.css"
import Formtask from "./pages/Formtask"
import Login from "./pages/login"
// BrowserRouter its use for alocating the current postion of the currrent window
const App = () => {
  return (
    <BrowserRouter>    
    <Navbar/>           
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/formtask" element={<Formtask/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App
