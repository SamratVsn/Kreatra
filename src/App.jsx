import { Routes, Route, useLocation } from "react-router-dom"
import Navi from './Components/Nav'
import Home from './Components/Home'
import Footer from './Components/Footer'
import Login from './Components/Login'
import About from './Components/About'
import Contact from './Components/Contact'

function App() {
  let location = useLocation();

  return (
    <>
      {
        !location.pathname.includes("/Login") &&
        <Navi />
      }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
      {
        !location.pathname.includes("/Login") &&
        <Footer />
      }

    </>
  )
}

export default App
