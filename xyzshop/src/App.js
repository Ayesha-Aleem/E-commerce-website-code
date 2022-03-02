import React from 'react';
import Menu from './Components/Menu';
import {BrowserRouter as Router,Switch,Route,Redirect} from "react-router-dom"
import home from './Components/home';
import products from "./Components/products/products"
import contact from './Components/contact';
import notFound from './Components/notFound';
function App() {
  return (
    <Router>
      <div >
      <Menu/>
        <Switch>
        <Route path="/contact" component={contact}/>
        <Route path="/products" component={products}/>
        <Route path="/not-found" component={notFound}/>
        {/* generic route "/" */}
        <Route path="/" exact component={home}/>
        <Redirect to="/not-found" />
        </Switch>
      </div>
    </Router>
   
  );
}

export default App;
