import React from 'react';
import './App.css';
import Header from './Header'
import MiniHabit from './MiniHabit'
import Content from './Content'
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


function Home() {
    return (
        <div>
            <h2>Home</h2>
        </div>
    );
}

export default App;
