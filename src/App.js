import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AppLayout from './containers/AppLayout';
import Login from './components/Login';
import Forgot from './components/Forgot';
import Register from './components/Register';
import Error404 from './components/Error404';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" name="Home" render={props => <AppLayout {...props} />} />
        <Route exact path="/login" name="Login" render={props => <Login {...props} />} />
        <Route exact path="/forgot" name="Forgot" render={props => <Forgot {...props} />} />
        <Route exact path="/register" name="Register" render={props => <Register {...props} />} />

        {/* Error 404 route. */}                
        <Route path="*" name="Error404" render={props => <Error404 {...props} />} />

      </Switch>
    </BrowserRouter>
  );
}

export default App;