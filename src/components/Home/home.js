import React from 'react';
import { Container } from 'react-bootstrap';
import self from '../../images/self.jpg';
import './style.css';

function Home() {
    return (
        <section>
            <Container className='home-container'>
                <div className='image'>
                    <img src={self} alt='Heather' />
                </div>
                <div>
                    <p>I'm an emerging Full Stack Web Developer.</p>
                    <p>I attended The Ohio State Full Stack Development Bootcamp from January 2021 through July 2021.</p>
                </div>
            </Container>
        </section>
    );
}

export default Home;