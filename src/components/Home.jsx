import React from "react";
import "../styles/Home.css";
import IdCard from "./IdCard";

const Home = () => {
  return (
    <>
    <div className="home" id="home">
      <div className="home-content">
        <div className="home-container">

        <div className="home-main">
          <h1 className="myname">Ruthwik.</h1>
          <h4 className="role">Developer.</h4>
          <h4 className="role">ML Engineer.</h4>
        </div>
        <div className="home-sub">
          Hey, I'm Ruthwik. I'm a 21 year old developer and ML Engineer based in
          India, currently living in the US. I've been coding since 2021 and
          currently pursuing masters in CS at the University of Memphis.
        </div>
        </div>
      </div>
      <div className="id-card">
        <IdCard/>
        </div>
    </div>

    <hr className="line"/>
    </>
  );
};

export default Home;
