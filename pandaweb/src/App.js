import logo from './logo.svg';
import './App.css';
import React from 'react';
import Main from './views/Main/Main'
import Twitch from './views/Twitch/Twitch'
import { Route , Link } from 'react-router-dom'



function App() {
        return (
            <div className="App">
                <Route exact path="/" component={Main}/>
                <Route exact path="/twitch" component={Twitch}/>
            </div>
)


}

export default App;
