import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Error404 from './components/Error404';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>

        <Route path="*">
          <Error404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;