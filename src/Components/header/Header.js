import React from 'react';
import "./header.css";
import { useState } from "react";

const Header = () => {

    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        if (this.scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    })
    //toggle menu
    const [toggle, showMenu] = useState(false);
    const [ActiveNav, setActiveNav] = useState("#home");

    return (
        <header className="header">
            <nav className="nav container">
                <a href="#" className='nav_logo'>Zubair Khan</a>

                <div className={toggle ? "nav_menu show_menu" : "nav_menu"}>
                    <ul className="nav_list grid">
                        <li className="nav_item">
                            <a href="#home" onClick={() => setActiveNav('#home')} className={
                                ActiveNav === "#home" ? "nav_link active_link" : "nav_link"
                            }>
                                <i class="uil uil-estate nav_icon"></i>Home
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#about" onClick={() => setActiveNav('#about')} className={
                                ActiveNav === "#about" ? "nav_link active_link" : "nav_link"
                            } >
                                <i className="uil uil-user nav_icon"></i>About
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#skills" onClick={() => setActiveNav('#skills')} className={
                                ActiveNav === "#skills" ? "nav_link active_link" : "nav_link"
                            }>
                                <i className="uil uil-file-alt nav_icon"></i>Skills
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#services" onClick={() => setActiveNav('#services')} className={
                                ActiveNav === "#services" ? "nav_link active_link" : "nav_link"
                            }>
                                <i className="uil uil-briefcase-alt nav_icon"></i>Services
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#qualification" onClick={() => setActiveNav('#qualification')} className={
                                ActiveNav === "#qualification" ? "nav_link active_link" : "nav_link"
                            }>
                                <i className="uil uil-scenery  nav_icon"></i>Portfolio
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#testimonials" onClick={() => setActiveNav('#testimonials')} className={
                                ActiveNav === "#testimonials" ? "nav_link active_link" : "nav_link"
                            }>
                                <i className="uil uil-message nav_icon"></i>Testimonials
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#contact" onClick={() => setActiveNav('#contact')} className={
                                ActiveNav === "#contact" ? "nav_link active_link" : "nav_link"
                            }>
                                <i className="uil uil-message nav_icon"></i>Contact
                            </a>
                        </li>
                    </ul>
                    <i className="uil uil-times nav_close" onClick={() => showMenu(!toggle)}></i>
                </div>

                <div className="nav_toggle" onClick={() => showMenu(!toggle)}>
                    <i className="uil uil-apps nav_toggle" ></i>
                </div>
            </nav>
        </header>
    )
}

export default Header
