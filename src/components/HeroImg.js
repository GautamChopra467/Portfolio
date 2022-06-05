import React from "react";
import "./HeroImgStyles.css";
import { Link } from "react-router-dom";
import IntroImg from '../assets/intro-bg.jpg';

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
          <img className='intro-img' src={IntroImg} alt='IntroImage' />
      </div>
      <div className="content">
          <p>I'm a Student</p>
          <h1>Web/App <br></br>Developer</h1>
          <div>
              <Link to='/project' className='btn'>Projects</Link>
              <Link to='/contact' className='btn btn-light'>Contact</Link>
          </div>
      </div>
    </div>
  );
};

export default HeroImg;
