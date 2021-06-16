import React from 'react';
import Navbar from './components/Navbar/navbar';
import Home from './components/Home/home';
import About from './components/About/about';
import Projects from './components/Projects/projects';
// import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';
import Header from './components/Header/header';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className='App'>
                <Header />
                <Navbar />
                <Route path='/' exact component={Home} />
                <Route path='/about' exact component={About} />
                <Route path='/projects' exact component={Projects} />
                <Footer />
            </div>
        </Router>
    );
}

export default App;

 // <div className='App'>
        //     <Navbar></Navbar>
        //     <div className='Header'>
        //         <Header></Header>
        //     </div>

        //     <div className='About'>
        //         <About></About>
        //     </div>

        //     <div className='Projects'>
        //         <Projects></Projects>
        //     </div>

        //     <div className='Contact'>
        //         <Contact></Contact>
        //     </div>

        //     <div className='Footer'>
        //         <Footer></Footer>
        //     </div>
        // </div>