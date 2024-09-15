import React from 'react'
import './Hero.css'
import Hero_image from '../Assets/hero_main_image.jpg'

import {Cursor, useTypewriter} from 'react-simple-typewriter'
const Hero = () => {

    const [typeEffect]=useTypewriter({
        words:['Web Developer','Backend Developer','React Dev','Youtube'],
        loop:{},
        typeSpeed:150,
        delaySpeed:100
    });
    return (
        <div className="hero" id="hero">
            <div className="hero-container">
                <div className="hero-left">
                    <img src={Hero_image} alt="" />
                </div>
                <div className="hero-right">
                    <h3 className='hero-top-heading'>Hello, I'm</h3>
                    <h1 className='hero-main-text'>Aditya</h1>
                    <h1 className="hero-main-text surname">Chavhan</h1>
                    <p className='hero-proff'>A Certified {typeEffect}
                    <span><Cursor/></span>
                    </p>
                    <button>Hire Me</button>
                    <button>About Me</button>
                </div>
            </div>
        </div>

    )
}

export default Hero
