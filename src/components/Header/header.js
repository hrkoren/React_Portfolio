import React, { Component } from 'react';
import Navbar from '../Navbar/navbar';
import './style.css';

class Header extends Component {
    render() {
        return (
            <header class='header'>
                <Navbar />
                <h1>Heather Rushmore Koren</h1>



                <div>
                    <section class='subtitle-image'></section>
                    <section class='subtitle'>
                        <h2 id='subtitle'>Full-Stack Development Portfolio</h2>
                    </section>
                </div>
            </header>
        );
    }
}

export default Header;