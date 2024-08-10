import "../styles/Navbar.css"
const Navbar = () => {

  return (
    <div className='navbar-container'>
     
        <div className="navbar">
        <div className="nav-links">
            <a href="#home" className="link">/</a>
            <a href="#work" className="link">Work</a>
            <a href="#skills" className="link">Skills</a>
            <a href="#projects" className="link">Projects</a>
            <a href="Ruthwik_Resume_USA.pdf" target="_blank" className="link resume">CV</a>
        </div>
        </div>

 
    </div>
  )
}

export default Navbar