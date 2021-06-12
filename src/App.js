import React from 'react';
import Navbar from './components/Navbar/navbar';
import Header from './components/Header/header';
import About from './components/About/about';
import Projects from './components/Projects/projects';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';

function App() {
    return (
        <div className='App'>
            <Navbar></Navbar>
            <div className='Header'>
                <Header></Header>
            </div>

            <div className='About'>
                <About></About>
            </div>

            <div className='Projects'>
                <Projects></Projects>
            </div>

            <div className='Contact'>
                <Contact></Contact>
            </div>

            <div className='Footer'>
                <Footer></Footer>
            </div>
        </div>
    );
}

export default App;