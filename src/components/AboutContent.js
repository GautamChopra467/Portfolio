import React from 'react';
import { Link } from 'react-router-dom';
import './AboutContentStyles.css';
import img1 from '../assets/projectImg1.png';
import img2 from '../assets/projectImg3.png';

const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left-section'>
            <h1>Hi, I’m Gautam. Nice to meet you.</h1>
            <p>Hello there! I am a student and a web-developer. Currently, I am pursuing BTECH in CSE from BVCOE. I also have a great interest in we design, and in creating stunning and effective websites.</p>
            <p>I create pixel-perfect desi solutions to business looking to improve their online strategy. I specialize in :</p>
            <ul>
                <li>CSS</li>
                <li>JS</li>
                <li>React JS</li>
            </ul>
            <p>... as well as apps in React Native.</p>
            <Link to="/contact">
            <button className='btn'>Contact</button>
            </Link>
        </div>
        <div className='right-section'>
            <div className='img-container'>
                <div className='img-stack top'>
                    <img src={img1} className='image' alt='true' />
                </div>
                <div className='img-stack bottom'>
                    <img src={img2} className='image' alt='true' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent
