import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

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