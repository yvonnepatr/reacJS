import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Footer from './modules/admin/Footer';
import Header from './modules/admin/Header';
import Products from './modules/admin/Products';
import EditProducts from './modules/admin/EditProducts';
import NewProducts from './modules/admin/NewProducts';
function App() {
  return (
    <div className="App">
      <Header />
        <Router>
          <Switch>
            <Route exact path="/products">
              <Products />
            </Route>
            <Route path="/products/new">
              <NewProducts />
            </Route>
            <Route path="/products/:id">
              <EditProducts />
            </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
