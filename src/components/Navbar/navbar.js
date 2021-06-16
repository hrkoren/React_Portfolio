import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Pdf from '../../images/Koren_Resume.pdf';
import './style.css';

class Navbar extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About Me</Link>
                    </li>
                    <li>
                        <Link to='/projects'>Projects</Link>
                    </li>
                    <li>
                        <a href={Pdf} target='_blank' rel="noreferrer">Resume</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;

