import React from 'react';
import { google, twitch } from './imports';
import './brand.css';

const Brand = () => (
    <div className="gpt3__brand section__padding">
        <div>
            <img src={google} alt="google"/>
        </div>
        <div>
            <img src={twitch} alt="twitch"/>
        </div>
    </div>
);

export default Brand;