import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router, Route, Switch, Redirect
} from 'react-router-dom';

import store from './store';

import Footer from './modules/admin/Footer';
import Header from './modules/admin/Header';
import Products from './modules/admin/Products';
import NewProduct from './modules/admin/NewProduct';
import EditProduct from './modules/admin/EditProduct';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Router>
          <Switch>
            <Redirect exact from="/" to="/products" />
            <Route exact path="/products">
                <Products />
            </Route>
            <Route path="/products/new" component={NewProduct} />
            <Route path="/products/:id" component={EditProduct} />
          </Switch>
        </Router>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
