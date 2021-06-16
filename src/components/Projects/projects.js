import React, { Component } from 'react';
import './style.css';
import { Card } from 'react-bootstrap';
import CardColumns from 'react-bootstrap/CardColumns';
import Project1 from '../../images/Project1.PNG';
import screenshot_login from '../../images/screenshot_login.PNG';
import GenPwd from '../../images/GenPwd.PNG';
import screenshot1 from '../../images/screenshot1.PNG';
import PWA from '../../images/PWA.PNG';
import tracker1 from '../../images/tracker1.PNG';
import fitness_tracker from '../../images/fitness_tracker.PNG';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Projects extends Component {
    render() {
        return (
            <section id='work'>
                <h2 className='side-header'>Project Portfolio</h2>
                <div>
                    <Container className='container'>
                        <CardColumns>
                            <Row>
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
                                        <Card.Title>Password Generator</Card.Title>
                                        <Card.Text>
                                            App to generate random passwords with numbers, upper or lowercase letters, and characters between 8 and 128 total characters.
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
                            </Row>

                            <Row>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img className='image' variant='top' src={tracker1} alt='screenshot of employee tracker app' />
                                    <Card.Body>
                                        <Card.Title>Employee Tracker</Card.Title>
                                        <Card.Text>
                                            MySQL Employee Tracker Project is a command line program that allows the user to track, add, and update an employee list in a SQL database.
                                        </Card.Text>
                                        <Card.Link href='https://github.com/hrkoren/Employee_Tracker' type='blank'>Employee Tracker</Card.Link>
                                    </Card.Body>
                                </Card>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img className='image' variant='top' src={PWA} alt='screenshot of budget app' />
                                    <Card.Body>
                                        <Card.Title>PWA Online/Offline Budget Tracker</Card.Title>
                                        <Card.Text>
                                            Use the budget tracker to meet your financial goals from anywhere - whether you are online or offline.
                                        </Card.Text>
                                        <Card.Link href='https://murmuring-waters-92136.herokuapp.com/' type='blank'>PWA Budget Tracker</Card.Link>
                                    </Card.Body>
                                </Card>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img className='image' variant='top' src={fitness_tracker} alt='screenshot of fitness tracker app' />
                                    <Card.Body>
                                        <Card.Title>NoSQL Workout Tracker</Card.Title>
                                        <Card.Text>
                                            Track and add new workouts using MongoDB, Mongoose, Node.JS, and Heroku.
                                        </Card.Text>
                                        <Card.Link href='https://still-basin-43953.herokuapp.com/?id=60a922f71aefe70015a2f2bc' type='blank'>NoSQL Workout Tracker</Card.Link>
                                    </Card.Body>
                                </Card>

                            </Row>
                        </CardColumns>
                    </Container>
                </div>
            </section >
        );
    }
}

export default Projects;