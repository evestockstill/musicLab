import React from 'react';
import Header from './header/Header';
import Albums from './albums/Albums';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Router >
        <Switch>
          <Route path='/albums/:id' component={Albums} />
          <Route path='/' component={Header} />
        </Switch>
      </Router>
    </>
  );
}
