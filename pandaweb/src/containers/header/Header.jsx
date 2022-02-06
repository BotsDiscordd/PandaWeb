import React from "react";
import './header.css'
import ai from '../../assets/ai.png';

const Header = () => {
    return (
        <div className="panda__header section__padding" id="home">
            <div className="panda__header-content">
                <h1 className="gradient__text">Welcome to UnraisedPandas Website</h1>
                <p>Thank You for visiting/watching us.</p>

                <div className="panda__header-content__input">
                    <input type="email" placeholder="Your Email Address"/>
                    <button type="button">Get Started</button>
                </div>

                <div className="gpt3__header-image">
                    <img src={ai} alt="ai"/>
                </div>
            </div>
        </div>
    )
}

export default Header