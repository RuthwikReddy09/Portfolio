import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Work from './components/Work'
import Projects from './components/Projects'
import Footer from './components/Footer'
import ScrollButton from './components/ScrollButton'


function App() {

  return (
    <>
      <Navbar/>
      <Home/>
      {/* <ScrollButton/> */}
      <Skills/>
      <Work/>
      <Projects/>
      <Footer/>
    </>
  )
}

export default App
