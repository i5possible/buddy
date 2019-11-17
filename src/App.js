import React from 'react';
import './App.css';
import Header from './Header/index.js'
import MiniHabit from './MiniHabit/index.js'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

const App = () => {
    return (
        <Router>
            <Header />
            <div>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/mini-habit">
                        <MiniHabit />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}


function Home() {
    return (
        <div>
            <h2>Home</h2>
        </div>
    );
}

export default App;
