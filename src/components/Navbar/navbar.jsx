import React from "react";
import "./navbar.css";
import logo from '../../assets/logo.svg';

const Navbar = () => {
    return (
        <div className="navbar">
            <img src={logo} alt="" />
            <ul className="nav-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#musictrackr">MusicTrackr</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="nav-buttons">
                <button className="btn btn-primary">Login</button>
                <button className="btn btn-secondary">Sign Up</button>
        </div>
        </div>
    )
}

export default Navbar;