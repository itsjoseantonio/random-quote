import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// Containers //
import Home from '../containers/Home';
import SingleAuthor from '../containers/SingleAuthor';

export default function App() {
    return (
        <React.Fragment>
            <Router>
                <Switch>
                    <Route path="/authors/:name">
                        <SingleAuthor />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </React.Fragment>
    );
}
