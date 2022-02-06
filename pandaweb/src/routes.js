import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './App';
import Signup from '../../pandaweb/src/components/Twitch/twitch';

const Main = () => {
    return (
        <Routes>
            <Route path='/' element={Home}/>
            <Route path='/signup' element={Signup}/>
        </Routes>
    );
}

export default Main;