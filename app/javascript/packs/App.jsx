import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './Components/Navbar';
import School from './Components/School';
import Addresses from "./Components/Addresses";
import Teachers from "./Components/Teachers";

const App = () => {
  return (
    <>
      <Router>
        <div className="h-screen lg:flex overflow-auto bg-white">
          <Navbar />
          <Switch>
            <Route exact path="/school" component={School} />
            <Route exact path="/adresses" component={Addresses} />
            <Route exact path="/professeurs" component={Teachers} />
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;