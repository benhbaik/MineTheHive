import React from 'react';
import { render } from 'react-dom';

import Main from './components/Main';
import MainGrid from './components/MainGrid';
import Article from './components/Article';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const router = (
    <Router history={ browserHistory }>
        <Route path="/" component={ Main }>
            <IndexRoute component={ MainGrid }></IndexRoute>
            <Route path="/article/:articleId" component={ Article }></Route>
        </Route>
    </Router>
);

render(<Main/>, document.getElementById('root'));
