import React, { Component } from 'react';
import './style.css';

class Header extends Component {
    render() {
        return (
            <header class='header'>
                <h1>Heather Rushmore Koren</h1>



                <div>
                    <section class='subtitle-image'></section>
                    <section class='subtitle'>
                        <h2 id='subtitle'>My Full-Stack Development Portfolio</h2>
                    </section>
                </div>
            </header>
        );
    }
}

export default Header;