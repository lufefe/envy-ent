import React from 'react'
import './Services.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Services() {
  return (

    <div class="services-container">
        <h1 class="services-heading">Services</h1>

        <div class="container">

            <div class="service-box">
                <div class="content">
                    <div class="icons">
                    <i class="fas fa-laptop-code"></i>
                    </div>
                    <div class="title-area">
                        <h3> Web Development </h3>
                        <span>All things web development: web design, web applications and website maintenance.</span>
                    </div>
                </div>
            </div>
            <div class="service-box">
                <div class="content">
                    <div class="icons">
                    <i class="fas fa-cloud"></i>
                    </div>
                    <div class="title-area">
                        <h3>Cloud Services</h3>
                        <span>Cloud migration, storage, security and management.</span>
                    </div>
                </div>
            </div>
            <div class="service-box">
                <div class="content">
                    <div class="icons">
                        <i class="fas fa-network-wired"></i>
                    </div>
                    <div class="title-area">
                        <h3>Network Security </h3>
                        <span>Network configurations, vulnerability scanning, penetration testing, etc.</span>
                    </div>
                </div>
            </div>
            <div class="service-box">
                <div class="content">
                    <div class="icons">
                        <i class="fas fa-wifi"></i>
                    </div>
                    <div class="title-area">
                        <h3>Technology Training and Awareness</h3>
                        <span>Upskilling of employees.</span>
                    </div>
                </div>
            </div>
            <div class="service-box">
                <div class="content">
                    <div class="icons">
                    <i class="fas fa-server"></i>
                    </div>
                    <div class="title-area">
                        <h3>IT Support</h3>
                        <span>Helpdesk, troubleshooting, application support, software upgrades and patches.</span>
                    </div>
                </div>
            </div>
            <div class="service-box">
                <div class="content">
                    <div class="icons">
                    <i class="fas fa-microchip"></i>
                    </div>
                    <div class="title-area">
                        <h3>Hardware Installations and Maintenance</h3>
                        <span>Equipment maintenance and asset management. </span>
                    </div>
                </div>
            </div>
            <div class="service-box">
                <div class="content">
                    <div class="icons">
                    <i class="fas fa-database"></i>
                    </div>
                    <div class="title-area">
                        <h3>Backups and Computer Operations</h3>
                        <span>Data backups, storage management and optimization.</span>
                    </div>
                </div>
            </div>
            <div class="service-box">
                <div class="content">
                    <div class="icons">
                    <i class="fas fa-mobile-alt"></i>
                    </div>
                    <div class="title-area">
                        <h3>Mobile Apps Development</h3>
                        <span>Tailored mobile application for Android, iOS, and Native apps.</span>
                    </div>
                </div>
            </div>
            <div class="service-box">
                <div class="content">
                    <div class="icons">
                        <i class="fas fa-project-diagram"></i>
                    </div>
                    <div class="title-area">
                        <h3>Project Management</h3>
                        <span>Consultation and management throughout project lifecycle.</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services