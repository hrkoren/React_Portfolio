import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <section id='contact'>
                <div className='section-head'>
                    <ul class='contact'>
                        <li id='phone'><strong>Phone:</strong>&nbsp; 412-660-4677</li>
                        <li id='email'><strong>Email:</strong>&nbsp; <a href='mailto:hrkoren@gmail.com'>hrkoren@gmail.com</a></li>
                        <li id='github'><strong>GitHub:</strong>&nbsp; <a href='https://github.com/hrkoren'>github.com/hrkoren</a></li>
                        <li id='linked'><strong>LinkedIn:</strong>&nbsp; <a href='https://www.linkedin.com/in/heatherkoren/'>Profile</a></li>
                    </ul>
                </div>
            </section>
        );
    }
}

export default Contact;