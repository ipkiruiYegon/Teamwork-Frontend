import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Home from './components/home';
import Login from './pages/login';
import PrivateRoute from './utils/protectedRoutes';
import PublicRoute from './utils/publicRoute';
//import { getToken, removeUserSession, setUserSession } from './utils/common';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <PublicRoute path="/login" name="login" component={Login} />
          <PrivateRoute exact path="/home" name="home" component={Home} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
