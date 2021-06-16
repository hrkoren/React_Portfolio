import React, { Component } from 'react';
import About from '../../components/About/about';
import Projects from '../../components/Projects/projects';
import './style.css';

class Navbar extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li>
                        <a href={About}>About Me</a>
                    </li>
                    <li>
                        <a href={Projects}>Work</a>
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

