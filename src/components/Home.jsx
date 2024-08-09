import React from "react";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <div className="home-main">
          <h1>Ruthwik.</h1>
          <h4>Developer.</h4>
          <h4>AI Enthusiast.</h4>
        </div>
        <div className="home-sub">
          Hey, I'm Ruthwik. I'm a 21 year old developer and ML Engineer based in
          India, currently living in the US. I've been coding since 2020 and
          currently pursuing masters in CS at the University of Memphis.
        </div>
      </div>
      <div className="id-card">Id Card</div>
    </div>
  );
};

export default Home;
