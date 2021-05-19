import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './Components/Navbar';
import School from './Components/School';
const App = () => {
  return (
    <>
      <Router>
        <div className="h-screen flex overflow-hidden bg-white">
          <Navbar />
          <Switch>
            <Route exact path="/school" component={School} />
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;