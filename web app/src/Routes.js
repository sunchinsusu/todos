import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { RouteWithLayout } from './component';
import { Sign } from './page'
import { MainLayout, EmptyLayout } from './layout'



const Routes = (props) => {
  const requireAuthen=(component)=>{
    const token = localStorage.token
    if(token != null) return component
    return Sign
  }

  return (
    <Switch>
      <Route
            path = "/"
            component={requireAuthen(MainLayout)}
            exact
        />
        <Route
            path = "/login"
            component={Sign}
            exact
        />
    </Switch>

  );
}

export default Routes;