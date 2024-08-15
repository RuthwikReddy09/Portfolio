import React from "react";
import "../styles/Projects.css";
import { FaGithub } from "react-icons/fa6";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <div className="projects-heading">&lt;Projects/&gt;</div>

      <div className="projects-content">
        <div className="project-card">
          <div className="project-container">
            <div className="project-header">
              <div className="project-name">Movie Recommendation System</div>
              <div className="project-links">
                <a
                  target="_blank"
                  href="https://github.com/RuthwikReddy09/CineMagicV2-React"
                  className="github"
                >
                  <FaGithub size={25} />
                </a>
              </div>
            </div>
            <div className="project-main">
              <p>
                &gt; Content based movie recommendation website (CineMagic)
                built using machine learning.
              </p>
              <p>
                <span className="reactjs tags">ReactJS</span>
                <span className="sass tags">Sass</span>
                <span className="ml tags">Machine Learning</span>
                <span className="nlp tags">NLP</span>
                <span className="flask tags">Flask</span>
              </p>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-container">
            <div className="project-header">
              <div className="project-name">
                Real-Time Emotion Recognition System{" "}
              </div>
              <div className="project-links">
                <a target="_blank" href="https://github.com/RuthwikReddy09/Stress-Detection-Frontend">
                  <FaGithub size={25} />
                </a>
              </div>
            </div>
            <div className="project-main">
              <p>
                &gt; The main purpose of this project was to accurately detect
                and analyze user emotions through facial expressions and speech
                signals.
              </p>
              <p>
                <span className="reactjs tags">ReactJS</span>
                <span className="dl tags">Deep Learning</span>
                <span className="flask tags">Flask</span>
              </p>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-container">
            <div className="project-header">
              <div className="project-name">Plagiarism Checker using NLP</div>
              <div className="project-links">
                <a target="_blank" href="https://github.com/RuthwikReddy09/Plagiarism-Checker">
                  <FaGithub size={25} />
                </a>
              </div>
            </div>
            <div className="project-main">
              <p>
                &gt; The primary objective was to compare a specified document
                with another, to detect potential instances of plagiarism.
              </p>
              <p>
                <span className="reactjs tags">ReactJS</span>
                <span className="ml tags">Machine Learning</span>
                <span className="nlp tags">NLP</span>
                <span className="flask tags">Flask</span>
              </p>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-container">
            <div className="project-header">
              <div className="project-name">Hurricane Damage Detection</div>
              <div className="project-links">
                <a target="_blank" href="https://github.com/RuthwikReddy09/Hurricane-Damage-Detection">
                  <FaGithub size={25} />
                </a>
              </div>
            </div>
            <div className="project-main">
              <p>
                &gt; The primary objective of this project is to detect if a
                property has been damaged by Hurricane or not using satellite
                images.
              </p>
              <p>
                <span className="dl tags">Deep Learning</span>
                <span className="flask tags">Flask</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
