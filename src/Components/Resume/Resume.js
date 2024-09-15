import React from 'react'
import './Resume.css'
import { FaGraduationCap } from "react-icons/fa";
import { HiBriefcase } from "react-icons/hi2";
const Resume = () => {
    return (
        <div className="resume">
            <h2 className='resume-h2'>My Resume</h2>
            <p className='resume-p'>Duis aute irure dolor in reprehen pteur sint occaecat cupidatat non</p>
            <p className='resume-p'>proident, sunt in culim id est.</p>

            <div className="resume-row">
                <div className="resume-col">
                    <div className="resume-title">
                        <h2 className='resume-title-h2'>Eduation</h2>
                    </div>
                    <div className="resume-content">
                        <div className="resume-content-box">
                            <div className='resume-icon'>
                                <FaGraduationCap />
                            </div>
                            <h4 className='resume-content-box-h4'>2018-2022</h4>
                            <h3 className='resume-content-box-h3'>High School</h3>
                            <p className='resume-content-box-p'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
                                obcaecati, voluptates asperiores perspiciatis esse ducimus
                                repellendus quibusdam ea quasi qui!
                            </p>
                        </div>

                        <div className="resume-content-box">
                            <div className='resume-icon'>
                                <FaGraduationCap />
                            </div>
                            <h4 className='resume-content-box-h4'>2018-2022</h4>
                            <h3 className='resume-content-box-h3'>High School</h3>
                            <p className='resume-content-box-p'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
                                obcaecati, voluptates asperiores perspiciatis esse ducimus
                                repellendus quibusdam ea quasi qui!
                            </p>
                        </div>

                        <div className="resume-content-box">
                            <div className='resume-icon'>
                                <FaGraduationCap />
                            </div>
                            <h4 className='resume-content-box-h4'>2018-2022</h4>
                            <h3 className='resume-content-box-h3'>High School</h3>
                            <p className='resume-content-box-p'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
                                obcaecati, voluptates asperiores perspiciatis esse ducimus
                                repellendus quibusdam ea quasi qui!
                            </p>
                        </div>
                    </div>
                </div>


                <div className="resume-col">
                    <div className="resume-title">
                        <h2 className='resume-title-h2'>Eduation</h2>
                    </div>
                    <div className="resume-content">

                        <div className="resume-content-box">
                            <div className='resume-icon'>
                                <HiBriefcase />
                            </div>
                            <h4 className='resume-content-box-h4'>2018-2022</h4>
                            <h3 className='resume-content-box-h3'>High School</h3>
                            <p className='resume-content-box-p'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
                                obcaecati, voluptates asperiores perspiciatis esse ducimus
                                repellendus quibusdam ea quasi qui!
                            </p>
                        </div>


                        <div className="resume-content-box">
                            <div className='resume-icon'>
                                <HiBriefcase />
                            </div>
                            <h4 className='resume-content-box-h4'>2018-2022</h4>
                            <h3 className='resume-content-box-h3'>High School</h3>
                            <p className='resume-content-box-p'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
                                obcaecati, voluptates asperiores perspiciatis esse ducimus
                                repellendus quibusdam ea quasi qui!
                            </p>
                        </div>

                        <div className="resume-content-box">
                            <div className='resume-icon'>
                                <HiBriefcase />
                            </div>
                            <h4 className='resume-content-box-h4'>2018-2022</h4>
                            <h3 className='resume-content-box-h3'>High School</h3>
                            <p className='resume-content-box-p'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
                                obcaecati, voluptates asperiores perspiciatis esse ducimus
                                repellendus quibusdam ea quasi qui!
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Resume
