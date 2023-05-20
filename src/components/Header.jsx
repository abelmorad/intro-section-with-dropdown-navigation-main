import { useState } from 'react';
import React from 'react';
import logo from './../../public/images/logo.svg';

export default function Header() {
    //menu button and close button state
    const [ menuBtnClicked, setMenuBtnClicked] = useState(false)
    const handleMenuClick = () => {
        setMenuBtnClicked(true);
    }
    const handleXBtnClick = () => { 
        setMenuBtnClicked(false)
    }

    //feature dropdown 
    const [ featureClicked, setFeatureClicked] = useState(null)
    const handleFeatureClick = () => {
        setFeatureClicked(featureClicked => !featureClicked);
    }

    //company dropdown
    const [ companyClicked, setCompanyClicked] = useState(null)
    const handleCompanyClick = () => {
        setCompanyClicked(companyClicked => !companyClicked)
    }

    return (
        <header>
            <img src={logo} alt="snaplogo" />
            <button className='menu-btn' onClick={handleMenuClick}></button>
            <nav 
                className='active-nav-menu' 
                style={menuBtnClicked ? { display: 'flex' } : {}}
            > 
            <button className='x-btn' onClick={handleXBtnClick}></button>
                <div className='nav-links'>
                    <div className="feature-container">
                        <span 
                            onClick={handleFeatureClick}  
                            className='arrow-onlink' 
                            href="#">
                                Features
                        </span>
                        <div 
                            style={featureClicked ? { display: 'flex' } : {}} 
                            className='feature-wrapper'
                        >
                            <span className='icon-todo'>
                                <a href="#">Todo List</a>
                            </span>
                            <span className='icon-calendar'>
                                <a href="#">Calendar</a>
                            </span>
                            <span className="icon-reminders">
                                <a href="#">Reminders</a>
                            </span>
                            <span className="icon-planning">
                                <a href="#">Planning</a>
                            </span>
                        </div>
                    </div>
                    <div className="company-container">
                        <span 
                            onClick={handleCompanyClick} 
                            className='arrow-onlink'
                            href="#">
                                Company
                        </span>
                        <div
                            style={companyClicked ? { display: 'flex' } : {}}
                            className="company-links-wrapper"
                        >
                            <a href="#">History</a>
                            <a href="#">Our Team</a>
                            <a href="#">Blog</a>
                        </div>
                    </div>
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