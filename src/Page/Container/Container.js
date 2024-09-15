import React from 'react'
import Hero from '../../Components/Hero/Hero'
import './Container.css'
import Intro from '../../Components/Intro/Intro'
import About from '../../Components/About/About'
import Skills from '../../Components/Skills/Skills'
import PortFolio from '../../Components/PortFolio/PortFolio'
import Service from '../../Components/Service/Service'
import Blog from '../../Components/Blog/Blog'
import Contact from '../../Components/Contact/Contact'
import Resume from '../../Components/Resume/Resume'
const Container = () => {
    return (
        <div className='item-container'>
            <Hero />
            <Intro />
            <About />
            <Skills />
            <PortFolio />
            <Service/>
            <Resume/>
            <Blog/>
            <Contact/>
        </div>
    )
}

export default Container
