import React from "react";
import "../styles/Skills.css";
import SkillCard from "./SkillCard";
const Skills = () => {
  return (
        <>
    <div className="skills" id="skills">
      <div className="skills-heading">&lt;Skills/&gt;</div>
      <div className="skills-content">
        <div className="skills-cards">
          <SkillCard name="Java" icon="java.svg" color="rgb(202, 166, 247)" />
          <SkillCard
            name="Python"
            icon="python.svg"
            color="rgb(202, 166, 247)"
            />
          <SkillCard name="C++" icon="c.svg" color="rgb(202, 166, 247)" />
          <SkillCard
            name="JavaScript"
            icon="js.svg"
            color="rgb(202, 166, 247)"
            />
    
        </div>
        <div className="skills-cards">
          <SkillCard name="ReactJS" icon="react.svg" color="red" />
          <SkillCard name="HTML" icon="html.svg" color="red" />
          <SkillCard name="CSS" icon="css.svg" color="red" />
        </div>
        <div className="skills-cards">
          <SkillCard name="Git" icon="git.svg" color="green" />
          <SkillCard name="MySQL" icon="sql1.svg" color="green" />
          <SkillCard name="PostgreSQL" icon="postgresql.svg" color="green" />
        </div>
        <div className="skills-cards">
          <SkillCard name="Tensorflow" icon="tensorflow.svg" color="rgb(55, 127, 228)" />
          <SkillCard name="HuggingFace" icon="huggingface.svg" color="rgb(55, 127, 228)" />
        </div>

        <div className="decoration1">&lt;&gt;</div>
        <div className="decoration2">&#123;&#125;</div>
        <div className="decoration3">#</div>
        {/* <div className="decoration4">&lt;&gt;</div> */}
      </div>
    </div>
    <hr className="line"/>

            </>
  );
};

export default Skills;
