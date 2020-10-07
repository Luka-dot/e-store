import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Directory from './components/directory/directory.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header.component/header.component';
import SignInAndSignOut from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Directory} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignOut} />
        </Switch>
      </div>
    );
  }
  
}

export default App;
