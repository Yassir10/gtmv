import React from 'react'
import Button from "./Button";
import "./Footer.css"
import logo from "../images/logo.png";

function Footer() {
    return (
        <div className='footer-container'>
            <section id="subscribe" className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Join our newsletter to receive news about the best latest movies
                </p>
                <p className='footer-subscription-text'>
                    You can unsubscribe at any time.
                </p>
                <div className='input-areas'>
                    <form>
                        <input
                            className='footer-input'
                            name='email'
                            type='email'
                            placeholder='Your Email'
                        />
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <section className="social-media">
                <div className="social-links">
                    <a href="https://github.com/Yassir10">
                        <i className="fa fa-github"/>
                    </a>
                    <a href="https://www.linkedin.com/in/yassir-sellal-a98aba187/">
                        <i className="fa fa-linkedin"/>
                    </a>
                </div>
            </section>
            <div className="website-rights-container">
                <img src={logo} alt="Logo"/>
                <p className="website-rights"> Copyright 2021 Yassir Sellal</p>
            </div>
        </div>
    );
}


export default Footer
