import React, { Component } from 'react';
import './style.css';
import { Card } from 'react-bootstrap';
import CardColumns from 'react-bootstrap/CardColumns';
import Project1 from '../../images/Project1.PNG';

class Projects extends Component {
    render() {
        return (
            <section id='work'>
                <h2 class='side-header'>Project Portfolio</h2>
                <div class='portfolio-container'>
                    <CardColumns>
                        <Card>
                            <Card.Img variant='top' src={Project1} />
                            <Card.Body>
                                <Card.Title>Beatzilla - Group Project</Card.Title>
                                <Card.Text>
                                    App lets music lovers to explore more music from their favorite and similar new artists by searhing for their top tracks.
                                </Card.Text>
                                <Card.Link href='https://jakech617.github.io/beatzilla/'>Beatzilla</Card.Link>
                            </Card.Body>
                        </Card>
                    </CardColumns>
                    {/* <a href='https://jakech617.github.io/beatzilla/'>
                        <img src={props.img} className='fade' id='proj1' type='_blank' alt='screenshot of project' />
                    </a> */}
                    {/* want to use onClick and props to handle the project images/links */}
                    {/* <a href='https://github.com/roy-sizemore/ace' class='fade' id='proj2' type='_blank' style='background-image: url(./Assets/images/screenshot_login.PNG)' alt='screenshot of group project using MVC'><p>Group Project - ACE</p></a>
                    <a href='https://hrkoren.github.io/passwordgenerator/' class='fade' id='proj3' type='_blank' style='background-image: url(./Assets/images/GenPwd.PNG)' alt='screenshot of a password generator'><p>Password Generator</p></a>
                    <a href='https://github.com/hrkoren/ORM_eCommerce_Bank' class='fade' type='_blank' id='proj4' style='background-image: url(./Assets/images/screenshot1.PNG)' alt='screenshot of ORM e-commerce bank project'><p>ORM e-Commerce</p></a>
                    <a href='https://github.com/hrkoren/ORM_eCommerce_Bank' class='fade' id='proj5' type='_blank' style='background-image: url(./Assets/images/screenshot1.PNG)'><p>ORM e-Commerce</p></a> */}
                </div>
            </section >
        );
    }
}

export default Projects;