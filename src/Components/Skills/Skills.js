import React from 'react'
import './Skills.css'
const Skills = () => {
    return (
        <div className="skill-box">

            <div className="skills-container-1">
                <div className="skill-text">
                    <h4 className='skill-text-h4'>My Skills</h4>
                    <h1 className='skill-text-h1'>I'm great in what I do</h1>
                    <h1 className='skill-text-h1'>and I'm loving it</h1>
                    <p className='skill-text-p'>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum.
                    </p>
                </div>


                <div className="skill-container">

                    <div className="skill-row">
                        <div className="skill-col">

                            <div className="skill-item-container">

                                <div className="skill">
                                    <div className="subject">Web Development</div>
                                    <div className="progress-bar" value="80%">
                                        <div className="progress-line" style={{ maxWidth: "80%" }} />
                                    </div>
                                </div>

                                <div className="skill">
                                    <div className="subject">Rest API Development</div>
                                    <div className="progress-bar" value="84%">
                                        <div className="progress-line" style={{ maxWidth: "84%" }} />
                                    </div>
                                </div>

                                <div className="skill">
                                    <div className="subject">Spring MVC</div>
                                    <div className="progress-bar" value="90%">
                                        <div className="progress-line" style={{ maxWidth: "90%" }} />
                                    </div>
                                </div>

                                <div className="skill">
                                    <div className="subject">Spring MVC</div>
                                    <div className="progress-bar" value="90%">
                                        <div className="progress-line" style={{ maxWidth: "90%" }} />
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>


            </div>

        </div>

    )
}

export default Skills
