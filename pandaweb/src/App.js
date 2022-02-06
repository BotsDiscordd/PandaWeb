import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Features, Header, Footer, Updates, Possibility}  from './containers';
import { Brand, CTA, Navbar } from "./components";
import About from "./containers/about/About";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Twitch from "./components/Twitch/twitch";



function App() {
        return (
            <div className="App">
                <div className="gradient__bg">
                    <Navbar />
                    <Header />
                </div>
                <Brand />
                <About />
                <Features />
                <Possibility />
                <CTA />
                <Updates />
                <Footer />
            </div>

)


}

export default App;
