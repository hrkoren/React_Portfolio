import React, { Component } from 'react';
import './style.css';

class Navbar extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li>
                        <a href='#about-me'>About Me</a>
                    </li>
                    <li>
                        <a href='#work'>Work</a>
                    </li>
                    <li>
                        <a href='#contact'>Contact Me</a>
                    </li>
                    <li>
                        <a href='./Assets/Koren_Resume.pdf' target='_blank'>Resume</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;

