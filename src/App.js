import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';

function App() {
  return (
  <div className="container mb-3 mt-3">
     <div className="row">
        <div className="col-12">
            <Router>
              <Switch>
                  <Route path='/' exact component={Home} />
                  <Route path='/user/:id' exact component={Details} />
              </Switch>
           </Router>
        </div>
     </div>
  </div>
  );
}

export default App;
