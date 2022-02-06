import React from "react";
import './about.css'
import {Feature} from "../../components";

const About = () => {
    return (
        <div className="panda__about section__margin" id="about">
            <div className="panda__about-feauture">
                <Feature title="Who is UnraisedPanda37" text="He is a twitch streamer and youtube content creator. Panda plays Beat saber, Clash Royale, and Minecraft(Mainly Hypixel Skyblock)"/>
            </div>
            <div className="panda__about-heading">
                <h1 className="gradient__text">Welcome to UnraisedPanda&apos;s Website</h1>
                <p>Find out more</p>
            </div>
            <div className="panda__about-container">
                <Feature title="Twitch" text="Panda's Twitch is accessible by clicking the twitch logo above"/>
                <Feature title="YouTube" text="Panda's YouTube is accessible by clicking the youtube logo above"/>
                <Feature title="Discord" text="Panda's Discord is accessible by clicking the discord logo above"/>
            </div>
        </div>
    )
}

export default About;