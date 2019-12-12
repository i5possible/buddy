import React from 'react';
import './App.css';
import Header from './Component/Header'
import MiniHabit from './Component/MiniHabit'
import Content from './Component/Content'
import Home from './Component/Home'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

const App = () => {
    const routes = (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/habit">
                <MiniHabit />
            </Route>
            <Route path="/memory">
                <MiniHabit />
            </Route>
            <Route path="/principle">
                <MiniHabit />
            </Route>
        </Switch>
    );
    return (
        <Router>
            <Header />
            <Content children={routes} />
        </Router>
    );
}

export default App;
