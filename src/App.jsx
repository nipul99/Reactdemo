import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div> 
       <Home title="title1" />
       <Navbar/>
    </div>
  )
}

export default App
