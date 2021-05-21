import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './Components/Navbar';

import Schools from './Components/school/Schools';
import Addresses from "./Components/Addresses";
import Teachers from "./Components/Teachers";

const App = () => {
  return (
    <>
      <Router>
<<<<<<< HEAD
        <div className="h-screen lg:flex overflow-auto bg-white">
=======
        <div className="h-screen flex bg-white">
>>>>>>> ea90d0e8842fab45e153c0f3551ff6f7c3697da4
          <Navbar />
          <Switch>
            <Route exact path="/ecole" component={Schools} />
            <Route
              exact
              path="/adresses"
              component={Addresses}
            />
            <Route exact path="/professeurs" component={Teachers} />
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;