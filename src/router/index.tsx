import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../pages/home/home';

export default class RouterIndex extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/test' component={()=><h1>test</h1>} />
                </Switch>
            </Router>
        );
    }
}
