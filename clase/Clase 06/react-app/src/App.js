import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Redirect
} from 'react-router-dom';

import Footer from './modules/admin/Footer';
import Header from './modules/admin/Header';
import Products from './modules/admin/Products';
import NewProduct from './modules/admin/NewProduct';
import EditProduct from './modules/admin/EditProduct';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Redirect exact from="/" to="/products" />
          <Route exact path="/products">
              <Products />
          </Route>
          <Route path="/products/new">
              <NewProduct />
          </Route>
          <Route path="/products/:id" component={EditProduct} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
