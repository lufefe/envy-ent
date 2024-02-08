import React from 'react'
import './Vision.css';
import vision from '../assets/invi_dumlogosplit.png'

function Vision() {
    return (
        <div className="vision-container">
            <div className="vision-content">
                <div className="main-col-left">
                    <h1>Vision</h1>
                    <p>Our vision is that of limitless possibilities. We believe that the future we want, we can create.
                        We envision a future where technology is leveraged to safely capture and process our data, doing the work for us in every way possible.<br/><br/>
                        Technology should be merely a means to a better society, providing us with solutions to our problems. Through transparency and innovation, we intend to build a secure and reliable technology ecosystem that advances humanity and augments our well-being.
                    </p>
                    <div>
                        
                    </div>
                </div>
                <div className="main-col-right">
                    <img src={vision} alt="dashboard" className="main-img"/>
                </div>
            </div>
        </div>
    )
};

export default Vision;
