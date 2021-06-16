import React, { Component } from 'react';
import './style.css';

class About extends Component {
    render() {
        return (
            <section id='content'>
                <div id='about'>
                    <h2 className='side-header'>About Me</h2>
                    <p id='about-content'>My background is in speech-language pathology and rehabilitation science and technology.
                        I have worked in the assistive technology field off and on for over twenty years. It has been a rewarding career, but
                        my passion for challenge led me to pursue my long-time desire to become a full-stack developer.
                        As a former software quality assurance analyst, I have an eye for how an application should behave. Among
                        my accomplishments in that position included finding three times the amount of bugs than the other analysts.<br></br>
                        <br></br>
                        In my free time, I love to write and am a published author. In addition, I'm an avid reader of anything mystery or historical fiction.
                        I'm also a mother of three ambitious young adults pursuing their dreams in life.
                    </p>
                </div >
                <div id='contact'>
                    <h2 className='side-header'>Contact Me</h2>
                    <div>
                        <ul className='contact'>
                            <li id='phone'><strong>Phone:</strong>&nbsp; 412-660-4677</li>
                            <li id='email'><strong>Email:</strong>&nbsp; <a href='mailto:hrkoren@gmail.com'>hrkoren@gmail.com</a></li>
                            <li id='github'><strong>GitHub:</strong>&nbsp; <a href='https://github.com/hrkoren'>github.com/hrkoren</a></li>
                            <li id='linked'><strong>LinkedIn:</strong>&nbsp; <a href='https://www.linkedin.com/in/heatherkoren/'>Profile</a></li>
                        </ul>
                    </div>
                </div>
            </section >
        );
    }
}

export default About;