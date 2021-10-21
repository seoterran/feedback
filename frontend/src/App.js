import React from 'react';
import PlayerView from './Components/PlayerView';
import OpsView from './Components/OpsView';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'


export default () => {
  return (
    <div class='gradient-border'  >
      <Router>
        <Switch>
          <Route exact path="/">
            <OpsView />
          </Route>
          <Route exact path="/player">
            <PlayerView />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}


