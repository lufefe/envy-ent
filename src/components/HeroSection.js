import React from 'react';
import '../App.css';
import './HeroSection.css';
import videoBg from '../assets/video7.mp4'
import ReactTypingEffect from 'react-typing-effect';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video autoPlay muted loop>
                <source src={videoBg} type='video/mp4'/>
            </video>
            <p className="typing">
            Reimagine a world where you have a symbiotic relationship with technology, a world where your data exclusively belongs to you and you have full oversight a relationship formed on trust and security between consumer and computer. That's the code we live by at Invidum Technologies - The World ReImagined.
            </p>
            {/* <p className="typing">
            <ReactTypingEffect
                text = {["Reimagine a world where you have a symbiotic relationship with technology ...", "a world where your data exclusively belongs to you and you have full oversight a relationship formed on trust and security between consumer and computer." ,"That's the code we live by at Invidum Technologies - The World ReImagined."]}
                speed="100"
                eraseDelay="300"
                typingDelay="1000"
            />
            </p> */}
        </div>
    )
};

export default HeroSection;