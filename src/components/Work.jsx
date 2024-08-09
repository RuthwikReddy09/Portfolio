import React from "react";
import "../styles/Work.css";
const Work = () => {
  return (
    <div className="work">
      <div className="work-heading">&lt;Work/&gt;</div>

      <div className="work-content">
        <div className="work-card">
          <div className="company-details">
            <div className="company-name">
                <img src="\public\Edgeforce_logo1.png" className="work-image"/>
                 EdgeForce Solutions</div>
            <div className="company-tenure">Jan 2024 - Apr 2024</div>
          </div>

          <div className="company-role"> Data Scientist Intern</div>
          <hr />

          <div className="company-responsibilities">
            &bull; Developed a regression-based predictive maintenance model
            aimed at forecasting the Remaining Useful Life Time (RUL) of
            Armoured fighting vehicles - AFV’s.
          </div>

          <div className="company-tech">
            &bull; Technologies Used : Machine Learning, Deep Learning, Data
            Science.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
