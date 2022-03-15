import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import ShopHeader from '../shop-header';
import { HomePage, CartPage } from '../pages';

import './app.css';

const App = ({ total, numItems }) => {
  return (
    <main role="main" className="container">
      <ShopHeader numItems={numItems} total={total}/>
      <Switch>
        <Route
          path="/"
          component={HomePage}
          exact />

        <Route
          path="/cart"
          component={CartPage}
          />
      </Switch>
    </main>
  );
};

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal }}) => {
  return {
    numItems: cartItems.reduce((prev, curr) => prev + curr.count, 0),
    total: orderTotal
  };
};

export default connect(mapStateToProps)(App);
