import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import config from 'src/routes/routes.config';

const Routes = () => (
  <Router>
    {config.map(({ component, path }) => (
      <PrivateRoute exact component={component} key={path} path={path} />
    ))}
  </Router>
);

export default Routes;
