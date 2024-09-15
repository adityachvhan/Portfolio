import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/fungi_logo.png'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false)

    let handleMenu = () => {

        setShowMenu(!showMenu)
    }


    return (
        <div className='navbar'>
            <div className="left">
                <img src={logo} alt="" />
            </div>


            <div className={showMenu ? "middle active" : "middle"}>
                <ul className='nav-link'>
                    <li>
                        <a className="nav-link active" aria-current="page" href="#site-header">
                            Home
                        </a>
                    </li>
                    <li>
                        <a className="nav-link" href="#about-section">
                            About
                        </a>
                    </li>
                    <li>
                        <a className="nav-link" href="#portfolio-section">
                            Portfolio
                        </a>
                    </li>
                    <li >
                        <a className="nav-link" href="#service-section">
                            Service
                        </a>
                    </li>
                    <li>
                        <a className="nav-link" href="#blog-section">
                            Blog
                        </a>
                    </li>
                    <li>
                        <a className="nav-link" href="#contact-section">
                            Contact
                        </a>
                    </li>
                </ul>


                <div className="right">
                    <li >
                        <a href="#">
                            <FaFacebookF />
                        </a>
                    </li>
                    <li >
                        <a href="#">
                            <FaXTwitter />
                        </a>
                    </li>
                    <li >
                        <a href="#">
                            <FaLinkedinIn />
                        </a>
                    </li>
                    <li >
                        <a href="#">
                            <BsInstagram />
                        </a>
                    </li>
                </div>

            </div>

            <div className='menu-icon' onClick={handleMenu}>
                <AiOutlineMenu />
            </div>


        </div>
    )
}

export default Navbar
