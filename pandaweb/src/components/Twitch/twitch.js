import './twitch.css';
import React from 'react';
import { Features, Header, Footer, Updates, Possibility}  from '../../containers';
import { Brand, CTA, Navbar } from "../../components";
import About from "../../containers/about/About";

const Twitch = () => {
    return (
        <div className="Twitch">
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




export default Twitch;
