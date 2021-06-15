import React, { Component } from 'react';
import './style.css';
import { Card } from 'react-bootstrap';
import CardColumns from 'react-bootstrap/CardColumns';
import Project1 from '../../images/Project1.PNG';
import screenshot_login from '../../images/screenshot_login.PNG';
import GenPwd from '../../images/GenPwd.PNG';
import screenshot1 from '../../images/screenshot1.PNG';

class Projects extends Component {
    render() {
        return (
            <section id='work'>
                <h2 class='side-header'>Project Portfolio</h2>
                <div class='portfolio-container'>
                    <CardColumns>
                        <Card className='card' style={{ width: '18rem' }}>
                            <Card.Img className='image' variant='top' src={Project1} />
                            <Card.Body>
                                <Card.Title>Beatzilla - Group Project</Card.Title>
                                <Card.Text>
                                    App lets music lovers to explore more music from their favorite and similar new artists by searhing for their top tracks.
                                </Card.Text>
                                <Card.Link href='https://jakech617.github.io/beatzilla/'>Beatzilla</Card.Link>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img className='image' variant='top' src={screenshot_login} alt='screenshot of group project using MVC' />
                            <Card.Body>
                                <Card.Title>ACE - Group Project</Card.Title>
                                <Card.Text>
                                    App allows companies to track their team’s training progress all in one place and gives employees more time to focus on the work that they love.
                                </Card.Text>
                                <Card.Link href='https://github.com/roy-sizemore/ace' type='blank'>ACE</Card.Link>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img className='image' variant='top' src={GenPwd} alt='screenshot of a password generator' />
                            <Card.Body>
                                <Card.Title>ACE - Group Project</Card.Title>
                                <Card.Text>
                                    App allows companies to track their team’s training progress all in one place and gives employees more time to focus on the work that they love.
                                </Card.Text>
                                <Card.Link href='https://hrkoren.github.io/passwordgenerator/' type='blank'>Password Generator</Card.Link>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img className='image' variant='top' src={screenshot1} alt='screenshot of ORM e-commerce bank project' />
                            <Card.Body>
                                <Card.Title>ORM e-Commerce</Card.Title>
                                <Card.Text>
                                    The E-Commerce Bank allows the user to search for, update, create, and delete products, categories, and tags.
                                </Card.Text>
                                <Card.Link href='https://github.com/hrkoren/ORM_eCommerce_Bank' type='blank'>ORM e-Commerce</Card.Link>
                            </Card.Body>
                        </Card>
                    </CardColumns>
                </div>
            </section >
        );
    }
}

export default Projects;