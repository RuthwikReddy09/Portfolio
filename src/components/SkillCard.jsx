import React from 'react'
import "../styles/SkillCard.css"
const SkillCard = ({name,icon, color}) => {
  return (
    <div className='skill-card'  style={{ boxShadow: `5px 5px  ${color}` }}>
      <img src={icon} className='skill-image'/> {name} 
    </div>
  )
}

export default SkillCard