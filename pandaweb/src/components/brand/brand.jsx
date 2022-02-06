import React from 'react';
import { google, twitch, discord } from './imports';
import './brand.css';

const Brand = () => (
    <div className="gpt3__brand section__padding" id="youtube">
        <div>
            <a href="https://www.youtube.com/c/UnraisedPanda37">
                <img src={google} alt="google"/>
            </a>
        </div>
        <div>
            <a href="https://www.twitch.tv/unraisedpanda37">
                <img src={twitch} alt="twitch"/>
            </a>
        </div>
        <div>
            <a href="https://www.discord.gg/umzkUvVQTz">
                <img src={discord} alt="discord"/>
            </a>
        </div>
    </div>
);

export default Brand;