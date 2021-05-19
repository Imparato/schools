import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './Components/Navbar';
import Schools from './Components/school/Schools';
import SchoolShow from './Components/school/SchoolShow';
const App = () => {
  return (
    <>
      <Router>
        <div className="h-screen flex bg-white">
          <Navbar />
          <Switch>
            <Route exact path="/school" component={Schools} />
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;