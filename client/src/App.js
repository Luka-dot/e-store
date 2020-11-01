import React, { useEffect, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { GlobalStyle } from './global.styles';

//  import ShopPage from './pages/shop/shop.component';
//  import CheckoutPage from './pages/checkout/checkout.component';
import Header from './components/header.component/header.component';
//  import SignInAndSignOut from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { checkUserSession } from './redux/user/user.actions';

import { selectCurrentUser } from './redux/user/user.selector';
//  import HomePage from './pages/homepage/homepage.componenet';

const HomePage = lazy(() => import('./pages/homepage/homepage.componenet'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));
const SignInAndSignOut = lazy(() => import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component'));

// import { selectCollectionsForPreview } from './redux/shop/shop.selector';

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession]);

    return (
      <div>
        <GlobalStyle />
        <Header />
        <Switch>
          <Suspense fallback={<div>... Loading ...</div>}>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route path='/checkout' component={CheckoutPage} />
            <Route exact path='/signin' render={() => currentUser ? (<Redirect to='/' />) : (<SignInAndSignOut/>)} />
          </Suspense>
        </Switch>
      </div>
    );
  
  
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
//  collectionsArray: selectCollectionsForPreview
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession())
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
