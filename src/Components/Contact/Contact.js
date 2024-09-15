import React from 'react'
import './Contact.css'
import { IoLocationOutline } from "react-icons/io5";
import { RiPhoneLine } from "react-icons/ri";
import { VscMail } from "react-icons/vsc";

const Contact = () => {
    return (
        <div className="contact">
            <h2 className='contact-h2'>Get In Touch</h2>
            <p className='contact-p'>Duis aute irure dolor in reprehen pteur sint occaecat cupidatat non</p>
            <p className='contact-p'>proident, sunt in culim id est.</p>
            <div className="contact-options">
                <div className="contact-item">
                    <div className="icon-box-2">
                        <IoLocationOutline />
                    </div>
                    <div className="contact-text">
                        <h4 className='contact-text-h4'>Address</h4>
                        <p className='contact-text-p'>Bardeshi, Amin Bazar, New York</p>
                    </div>
                </div>
                <div className="contact-item">
                    <div className="icon-box-2">
                        <RiPhoneLine />
                    </div>
                    <div className="contact-text">
                        <h4 className='contact-text-h4'>Phone</h4>
                        <p className='contact-text-p'>9156482727</p>
                    </div>
                </div>
                <div className="contact-item">
                    <div className="icon-box-2">
                        <VscMail />
                    </div>
                    <div className="contact-text">
                        <h4 className='contact-text-h4'>Emial</h4>
                        <p className='contact-text-p'>adityachavhan11@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="contact-form">
                <div className="map-box">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59696.722205261634!2d78.57148587988948!3d20.74896450871436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd47f04f15aa69d%3A0xe76e35b13382a66c!2sWardha%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1711783701312!5m2!1sen!2sin"
                        width={600}
                        height={450}
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
                <div className="contact-field">
                    <h1>Write me a message</h1>
                    <div className="contact-container">
                        <form action="action_page.php">
                            <input
                                type="text"
                                id="fname"
                                name="firstname"
                                placeholder="Your name.."
                            />
                            <input
                                type="text"
                                id="lname"
                                name="lastname"
                                placeholder="Your last name.."
                            />
                            <textarea
                                name=""
                                id=""
                                cols={30}
                                rows={9}
                                placeholder="Write something"
                                defaultValue={""}
                            />
                        </form>
                        <button>SEND MESSAGE</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Contact
