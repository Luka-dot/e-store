import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Directory from './components/directory/directory.component';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Directory} />
      </Switch>
    </div>
  );
}

export default App;
