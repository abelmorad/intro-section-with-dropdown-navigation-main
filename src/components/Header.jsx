import { useState } from 'react';
import React from 'react';
import logo from './../../public/images/logo.svg';

export default function Header() {
    return (
        <>
        <header>
            <img src={logo} alt="snaplogo" />
            <button className='menu-btn'></button>
            <nav className='active-nav-menu'>
            <button className='x-btn'></button>
                <div className='nav-links'>
                    <a href="#">Features</a>
                    <a href="#">Company</a>
                    <a href="#">Careers</a>
                    <a href="#">About</a>
                </div>
                <div className='nav-login-reg'>
                    <a href="#">Login</a>
                    <a className='register-btn' href="#">Register</a>
                </div>
            </nav>
        </header>
        <main>
        
        </main>
        </>
    )
}