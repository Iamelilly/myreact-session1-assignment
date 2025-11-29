// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import AboutReact from './components/AboutReact'
import Welcome from './components/WelcomeMessage'
import ListGroup from './components/ListGroup'
import Footer from './components/Footer'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <h1>App Component</h1>
        <Welcome/>
        <AboutReact/>
        <ListGroup/>
        <Footer/>
      </div>
    </>
  )   
}

export default App
