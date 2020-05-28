import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import CreateNote from '../pages/CreateNote';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={SignIn} />
    <Route path="/SignUp" component={SignUp} />

    <Route path="/Home" component={Home} isPrivate />
    <Route path="/CreateNote" component={CreateNote} isPrivate />
  </Switch>
);

export default Routes;
