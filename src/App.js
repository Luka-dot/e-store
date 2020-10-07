import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Directory from './components/directory/directory.component';
import ShopPage from './pages/shop/shop.component';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Directory} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
