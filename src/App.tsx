import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.scss';
import routeConf from './route-config';

import MomentJs from './pages/moment-js';
import DayJs from './pages/day-js';
import Luxon from './pages/luxon';
import DateFns from './pages/date-fns';

const App = (): JSX.Element => (
    <BrowserRouter>
        <Switch>
            <Route path={routeConf.MomentJs.uri} exact component={MomentJs} />
            <Route path={routeConf.DayJs.uri} exact component={DayJs} />
            <Route path={routeConf.Luxon.uri} exact component={Luxon} />
            <Route path={routeConf.DateFns.uri} exact component={DateFns} />
            <Redirect to={routeConf.MomentJs.uri} />
            <Redirect from="/" to={routeConf.MomentJs.uri} />
        </Switch>
    </BrowserRouter>
);

export default App;
