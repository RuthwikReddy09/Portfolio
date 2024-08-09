import React from 'react'
import "../styles/Footer.css"

import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
      <div className='footer'>
      
        <div className="footer-content">
        <div className="footer-links">
            <a href="" className="footer-link"><FaGithub size={20}/></a>
            <a href="" className="footer-link"><FaLinkedin size={20}/></a>
            <a href="" className="footer-link"><MdEmail size={25}/></a>
        </div>
        <div className="footer-description">
            Made with <span className='heart'>&lt;3</span>, Thank you.
        </div>
        </div>
    </div>
  )
}

export default Footer