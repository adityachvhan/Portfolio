import React from 'react'
import './Intro.css'
import { FaReact } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";
import { IoMdRocket } from "react-icons/io";
const Intro = () => {
    return (
        <section className="intro-section">
            <div className="container-box">
                <div className="section-title">
                    <h2 className='intro-text'>Welcome to my World</h2>
                    <p className="lead">
                        I'm a young tech enthasist and entrepreneur who love to take risk. I
                        grew up in a tech family in New York City.
                    </p>
                </div>
                <div className="row">
                    <div className="intro-col">
                        <div className="item-wrapper">
                            <div className="icon-box-1">
                                <FaReact />
                            </div>
                            <div className="content-wrapper">
                                <h3 className='content-wrapper-text'>Creativity</h3>
                                <p className='content-wrapper-paragraph'>
                                    Duis aute irure dolor in it esse cillum dolore eu fugiat nulla
                                    pari erunt mollit anim id est laborum.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="intro-col">
                        <div className="item-wrapper">
                            <div className="icon-box-1">
                                <IoDiamondOutline />
                            </div>
                            <div className="content-wrapper">
                                <h3 className='content-wrapper-text'>Dedication</h3>
                                <p className='content-wrapper-paragraph'>
                                    Duis aute irure dolor in it esse cillum dolore eu fugiat nulla
                                    pari erunt mollit anim id est laborum.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="intro-col">
                        <div className="item-wrapper">
                            <div className="icon-box-1">
                                <IoMdRocket />
                            </div>
                            <div className="content-wrapper">
                                <h3 className='content-wrapper-text'>Hard Work</h3>
                                <p className='content-wrapper-paragraph'>
                                    Duis aute irure dolor in it esse cillum dolore eu fugiat nulla
                                    pari erunt mollit anim id est laborum.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Intro
