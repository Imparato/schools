import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './Components/Navbar';

import Schools from './Components/school/Schools';
import Addresses from "./Components/Addresses";

const App = () => {
  return (
    <>
      <Router>
        <div className="h-screen flex bg-white">
          <Navbar />
          <Switch>
            <Route exact path="/school" component={Schools} />
            <Route
              exact
              path="/adresses"
              component={Addresses}
            />
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;