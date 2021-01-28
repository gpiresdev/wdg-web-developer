import React from 'react';
import { Route as DOMRoute, Switch } from 'react-router-dom';

import EditUser from '../pages/EditUser';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Users from '../pages/Users';
import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
    <Route component={Login} exact path="/" />
    <Route component={Users} exact isPrivate
      path="/users" />
    <Route component={EditUser} isPrivate path="/users/:id" />
    <DOMRoute component={NotFound} />

  </Switch>
);

export default Routes;
