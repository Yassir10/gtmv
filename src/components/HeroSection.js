import React from 'react'
import Button from "./Button";
import './HeroSection.css'
import '../App.css'

function HeroSection() {
    return (
        <div className='hero-container'>
            <h1>GET THE BEST MOVIES</h1>
            <p>What are you waiting for?</p>
            {/*<div className='hero-btns'>*/}
            {/*    <Button*/}
            {/*        className='btns'*/}
            {/*        buttonStyle='btn--outline'*/}
            {/*        buttonSize='btn--large'*/}
            {/*    >*/}
            {/*        GET STARTED*/}
            {/*    </Button>*/}
            {/*    <Button*/}
            {/*        className='btns'*/}
            {/*        buttonStyle='btn--primary'*/}
            {/*        buttonSize='btn--large'*/}
            {/*    >*/}
            {/*        <a target="_blank"*/}
            {/*           className="externalLink"*/}
            {/*           rel="noreferrer"*/}
            {/*           href="https://www.youtube.com/watch?v=OycYHUdAWfQ">*/}
            {/*            WATCH TRAILER <i className='far fa-play-circle' />*/}
            {/*        </a>*/}
            {/*    </Button>*/}
            {/*</div>*/}
        </div>
    );
}

export default HeroSection;