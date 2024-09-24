import React from 'react'
import "../styles/IdCard.css"

import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const IdCard = () => {
  return (
    <div class="maincontainer">

      <div class="thecard">

        <div class="thefront">

          <img src="profile.jpg" className='profile' />

        </div>

        <div class="theback">
            <h1 className="name">Ruthwik Reddy Doodipala</h1>
            <div className="my-info">

            <h4 className='card-details'>Major: Masters in CS</h4>
            <h4 className='card-details'>Uni: University of Memphis</h4>
            <h4 className='card-details'>Location: Memphis,Tennessee</h4>
            </div>

            <div className="card-links">
            <a target='_blank' href="https://github.com/RuthwikReddy09" className="card-link"><FaGithub size={25}/></a>
            <a target='_blank' href="https://www.linkedin.com/in/ruthwik-reddy-doodipala-482292228/" className="card-link"><FaLinkedin size={25}/></a>
            <a href="mailto:druthwik09@gmail.com" className="card-link"><MdEmail size={30}/></a>
            </div>
        
        </div>

      </div>
    </div>
  )
}

export default IdCard



