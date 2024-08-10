import React from 'react'
import "../styles/Footer.css"

import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <>
        <hr className='line'/>
      <div className='footer'>
        <div className="footer-content">
        <div className="footer-links">
            <a target='_blank' href="https://github.com/RuthwikReddy09" className="footer-link"><FaGithub size={20}/></a>
            <a target='_blank' href="https://www.linkedin.com/in/ruthwik-reddy-doodipala-482292228/" className="footer-link"><FaLinkedin size={20}/></a>
            <a href="mailto:druthwik09@gmail.com" className="footer-link"><MdEmail size={25}/></a>
        </div>
        <div className="footer-description">
            Made with <span className='heart'>&lt;3</span>, Thank you.
        </div>
        </div>
    </div>
    </>
  )
}

export default Footer