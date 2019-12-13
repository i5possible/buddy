import React from 'react';
import './App.css';
import Header from './Component/Header';
import MiniHabit from './Component/MiniHabit';
import Content from './Component/Content';
import Home from './Component/Home';
import {
    Router,
    Switch,
    Route,
} from "react-router-dom";
import { createBrowserHistory } from 'history';


const App = () => {
    const browserHistory = createBrowserHistory();
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
        <Router history={browserHistory}>
            <Header />
            <Content children={routes} />
        </Router>
    );
}

export default App;
