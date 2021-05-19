import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './Components/Navbar';
import School from './Components/School';
import Addresses from "./Components/Addresses";

const App = () => {
  return (
    <>
      <Router>
        <div className="h-screen flex overflow-hidden bg-white">
          <Navbar />
          <Switch>
            <Route exact path="/school" component={School} />
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