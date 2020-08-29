import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { RouteWithLayout } from './component';
import { Login, Detail } from './page'
import { MainLayout } from './layout'



const Routes = (props) => {
  return (
    <Switch>
      <RouteWithLayout
        component={Login}
        exact
        layout={MainLayout}
        path="/login"
      />
      <Route
            path = "/"
            component={MainLayout}
            exact
        />
      <RouteWithLayout
        component={Detail}
        exact
        layout={MainLayout}
        path="/detail/:id"
      />
    </Switch>

  );
}

export default Routes;