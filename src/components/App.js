import React from 'react';
import Header from './header/Header';
import Albums from './albums/Albums';
import TracksList from './tracks/TracksList';
import Lyrics from './lyrics/Lyrics';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Router >
        <Switch>
          <Route path='/albums/:artistName/:id/:albumId/:songId' component={Lyrics} />
          <Route path='/albums/:artistName/:id/:albumId' component={TracksList} />
          <Route path='/albums/:artistName/:id' component={Albums} />
          <Route exact path='/' component={Header} />
        </Switch>
      </Router>
    </>
  );
}
