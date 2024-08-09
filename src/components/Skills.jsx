import React from 'react'
import "../styles/Skills.css"
import SkillCard from './SkillCard'
const Skills = () => {
  return (
    <div className='skills'>
        <div className="skills-heading">
        &lt;Skills/&gt;
        </div>
        <div className="skills-content">

<div className="skills-cards">

        <SkillCard name="Java" icon="public\java.svg" color="rgb(202, 166, 247)"/>
        <SkillCard name="Python" icon="public\python.svg" color="rgb(202, 166, 247)"/>
        <SkillCard name="C++" icon="public\C.svg" color="rgb(202, 166, 247)"/>
        <SkillCard name="Javascript" icon="public\js.svg" color="rgb(202, 166, 247)"/>
</div>
<div className="skills-cards">

        <SkillCard name="ReactJS" icon="public\react.svg" color="red"/>
        <SkillCard name="HTML" icon="public\html.svg" color="red"/>
        <SkillCard name="CSS" icon="public\css.svg" color="red"/>
</div>
<div className="skills-cards">


        <SkillCard name="Tensorflow" icon="public\tensorflow.svg" color="white"/>
        <SkillCard name="HuggingFace" icon="public\huggingface.svg" color="white"/>
</div>
<div className="skills-cards">


        <SkillCard name="Git" icon="public\git.svg" color="green"/>
        {/* <SkillCard name="Bash" icon="#" color="green"/> */}
</div>
        



        </div>
    </div>
  )
}

export default Skills