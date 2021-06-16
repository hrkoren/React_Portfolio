import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home/home';
import About from './components/About/about';
import Projects from './components/Projects/projects';
import Footer from './components/Footer/footer';
import Header from './components/Header/header';

function App() {
    return (
        <Router>
            <div className='App'>
                <Header />
                <Route path='/' exact component={Home} />
                <Route path='/about' exact component={About} />
                <Route path='/projects' exact component={Projects} />
                <Footer />
            </div>
        </Router>
    );
}

export default App;