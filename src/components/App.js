import React from 'react';
import Header from './header/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Router >
        <Header />
      </Router>
    </>
  );
}
