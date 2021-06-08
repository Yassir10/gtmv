import React, {useState, useEffect} from 'react';
import Button from './Button'
import './Navbar.css'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => {
        setClick(!click);
    }

    const closeMobileMenu = () => {
        setClick(false)
    }

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton();
    }, [])

    window.addEventListener("resize", showButton)

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="navbar-logo" onClick={closeMobileMenu}>
                        GTMV <i className="fa fa-tv"/>
                    </div>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fa fa-times' : 'fa fa-bars'}/>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <a href="#" className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#movies" className="nav-links" onClick={closeMobileMenu}>
                                Movies
                            </a>
                        </li>

                        <li className="nav-item">
                            <a href="#about" className="nav-links" onClick={closeMobileMenu}>
                                About
                            </a>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline' redirect="#subscribe">SIGN UP</Button>}
                </div>
            </nav>

        </>
    );
};

export default Navbar;
