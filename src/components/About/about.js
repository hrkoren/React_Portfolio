import React, { Component } from 'react';
import './style.css';

class About extends Component {
    render() {
        return (
            <section id='about'>
                <h2 class='side-header'>About Me</h2>
                <p id='about-content' img src='../images/self-image.jpg' alt='picture of Heather'>My background is in speech-language pathology and rehabilitation science and technology.
                    I have worked in the assistive technology field off and on for over twenty years. It has been a rewarding career, but
                    my passion for challenge led me to pursue my long-time desire to become a full-stack developer.
                    As a former software quality assurance analyst, I have an eye for how an application should behave. Among
                    my accomplishments in that position included finding three times the amount of bugs than the other analysts.
                    I am a published author, avid reader, and a mother of three ambitious young adults pursuing their dreams in life.
                </p>
            </section>
        );
    }
}

export default About;