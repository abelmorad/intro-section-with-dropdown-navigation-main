import { useState } from 'react';
import React from 'react';
import logo from './../../public/images/logo.svg';

export default function Header() {
    //menu button and close button state
    const [menuBtnClicked, setMenuBtnClicked] = useState(false)
    const handleMenuClick = () => {
        setMenuBtnClicked(true);
    }
    const handleXBtnClick = () => { 
        setMenuBtnClicked(false)
    }

    return (
        <header>
            <img src={logo} alt="snaplogo" />
            <button className='menu-btn' onClick={handleMenuClick}></button>
            <nav className='active-nav-menu' style={menuBtnClicked ? { display: 'flex' } : {}}>
            <button className='x-btn' onClick={handleXBtnClick}></button>
                <div className='nav-links'>
                    <a className='arrow-onlink' href="#">Features</a>
                    <a className='arrow-onlink' href="#">Company</a>
                    <a href="#">Careers</a>
                    <a href="#">About</a>
                </div>
                <div className='nav-login-reg'>
                    <a href="#">Login</a>
                    <a className='register-btn' href="#">Register</a>
                </div>
            </nav>
        </header>
    )
}