import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Directory from './components/directory/directory.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header.component/header.component';
import SignInAndSignOut from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Directory} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignOut} />
      </Switch>
    </div>
  );
}

export default App;
