import React from 'react'
import './About.css'
import about_image from '../Assets/about-image-1.png'
const About = () => {
    return (
        <section className="about" id="about">
            <div className="about-container">
                <div className="about-left">
                    <img src={about_image} alt="" />
                </div>
                <div className="about-right">
                    <h2 className='about-right-h2'>About Me</h2>
                    <h1 className='about-right-h1'>A Passionate Web Developer</h1>
                    <h1 className='about-right-h1'>from Maharashtra</h1>
                    <p className='about-right-p'>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        <br />
                        <br />
                        Tabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>

                    <div className="information">
                        <div className="info-box">
                            <ul className="personal-info">
                                <li className='personal-info-li'>
                                    <h4 className='personal-info-h4'>Name</h4>
                                    <p className='personal-info-p'>Aditya Chavhan</p>
                                </li>
                                <li className='personal-info-li'>
                                    <h4 className='personal-info-h4'>Email</h4>
                                    <p className='personal-info-p'>adityachavhan11@gmail.com</p>
                                </li>
                                <li className='personal-info-li'>
                                    <h4 className='personal-info-h4'>Phone</h4>
                                    <p className='personal-info-p'>9156482727</p>
                                </li>
                            </ul>
                        </div>
                        <div className="info-box">
                            <ul className="personal-info">
                                <li className='personal-info-li'>
                                    <h4 className='personal-info-h4'>Age</h4>
                                    <p className='personal-info-p'>24 Years</p>
                                </li>
                                <li className='personal-info-li'>
                                    <h4 className='personal-info-h4'>Education</h4>
                                    <p className='personal-info-p'>Bachelors Of Engineering</p>
                                </li>
                                <li className='personal-info-li'>
                                    <h4 className='personal-info-h4'>Freelance</h4>
                                    <p className='personal-info-p'>Available</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="cv-button">
                        <button>Download CV</button>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default About
