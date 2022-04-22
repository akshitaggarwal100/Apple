import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Mac from "./components/Mac"
import Iphone from "./components/Iphone"
import Ipad from "./components/Ipad"
import Watch from "./components/Watch"
import Airpod from "./components/Airpod"
import './App.css'
import {
  HashRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Mac" element={<Mac />} />
          <Route path="/iPad" element={<Ipad />} />
          <Route path="/iPhone" element={<Iphone />} />
          <Route path="/Watch" element={<Watch />} />
          <Route path="/Airpod" element={<Airpod />} />
        </Routes>
      </Router>
    </>
  )
}

export default App