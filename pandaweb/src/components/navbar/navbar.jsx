import React, { useState} from "react";
import './navbar.css'
import { RiMenu3Line, RiCloseLine} from "react-icons/ri";
import logo from "../../assets/youtube.png"

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <div className="panda__navbar">
            <div className="panda__navbar-links">
                <div className="panda__navbar-links-logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="panda__navbar-links_container">
                    <p><a href="/">Home</a> </p>
                    <p><a href="/twitch">YouTube</a></p>
                    <p><a href="#about">About</a></p>
                </div>
            </div>
            <div className="panda__navbar-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
            </div>
            <div className="panda__navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
                {toggleMenu && (
                    <div className="panda__navbar-menu_container scale-up-center">
                        <div className="panda__navbar-menu_container-links">
                            <p><a href="#home">Home</a></p>
                            <p><a href="#youtube">YouTube</a></p>
                            <p><a href="#about">About</a></p>
                        </div>
                        <div className="panda__navbar-menu_container-links-sign">
                            <p>Sign in</p>
                            <button type="button">Sign up</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar