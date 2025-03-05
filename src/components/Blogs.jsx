import React from 'react'
import { FaLink } from "react-icons/fa6";
import "../styles/Blogs.css";

const Blogs = () => {
  return (
     <div className="blogs" id="blogs">
          <div className="blogs-heading">&lt;Blogs/&gt;</div>

          <div className="blogs-content">

            <div className="blog-card">
              <div className="blog-container">
                <div className="blog-header">
                  <div className="blog-name">An Introduction to LangChain and It's Core Concepts</div>
                  <div className="blog-links">
                    <a
                      target="_blank"
                      href="https://ruthwikreddy09.github.io/Intro-to-LangChain/"
                      className="github"
                    >
                      <FaLink size={25} />
                    </a>
                  </div>
                </div>
                <div className="project-main">
                  <p>
                    &gt; In this blog, I have introduced LangChain, an open-source framework for building AI applications using language models.
                    <br /><br />
                    &gt; explored LangChain core concepts, such as prompt templates, document loaders, chains, and tools.
 
                  </p>
                  <br />
                  <p className='image-container'>
                   <img src="public/langchain1.png" alt="Error" />
                  </p>
                </div>
              </div>
            </div>
    

            <div className="blog-card">
              <div className="blog-container">
                <div className="blog-header">
                <div className="project-name">Build Your First AI App: A YouTube Video Summarizer with LangChain</div>
                <div className="blog-links">
                    <a
                      target="_blank"
                      href="https://ruthwikreddy09.github.io/Youtube-Video-Summarizer/"
                      className="github"
                    >
                      <FaLink size={25} />
                    </a>
                  </div>
                </div>
                <div className="project-main">
                  <p>
                    &gt; 
                    In this blog, I have developed a YouTube Video Summarizer using LangChain and OpenAI.
                    <br /><br />&gt; 
                    Implemented a user-friendly Streamlit interface and integrated OpenAI's GPT-3.5 for efficient content summarization.

                  </p>
                  <br />
                  <p className='image-container'>
                    <img src="public/summarizer.png" alt="Error" />
                  </p>
                </div>
              </div>
            </div>
    


          </div>
        </div>
  )
}

export default Blogs