import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={SignIn} />
    <Route path="/SignUp" component={SignUp} />
    <Route path="/Home" component={Home} />
  </Switch>
);

export default Routes;
