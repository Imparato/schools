import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";

import Schools from "./Components/school/Schools";
import Addresses from "./Components/Addresses";
import Teachers from "./Components/Teachers";
import home from "./Components/home";
import { useDispatch } from "react-redux";
import { getCurrentSchool } from "./actions/currentSchool.action";

const App = () => {
  const dispatch = useDispatch();
  
  useState(() => {
    const schoolItem = window.localStorage.getItem("school");
    if (schoolItem) {
      dispatch(getCurrentSchool(JSON.parse(schoolItem)));
    }
  }, []);

  return (
    <>
      <Router>
        <div className="h-screen lg:flex overflow-auto bg-white">
          <Navbar />
          <Switch>
            <Route exact path="/" component={home} />
            <Route exact path="/ecole" component={Schools} />
            <Route exact path="/adresses" component={Addresses} />
            <Route exact path="/professeurs" component={Teachers} />
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;
