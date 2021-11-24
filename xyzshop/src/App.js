import React from 'react';
import Menu from './Components/Menu';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import landingpage from './Components/landingpage';

function App() {
  return (
    <Router>
      <div >
        <Menu/>
        <Switch>
          <Route to="/" component={landingpage}/>
        </Switch>
      </div>
    </Router>
   
  );
}

export default App;
