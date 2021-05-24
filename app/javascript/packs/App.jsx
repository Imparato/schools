import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";

import Schools from "./Components/school/Schools";
import Addresses from "./Components/address/Addresses";
import Teachers from "./Components/teacher/Teachers";
import Home from "./Components/Home";
import { useDispatch } from "react-redux";
import { getCurrentSchool } from "./actions/currentSchool.action";
import { getAddresses } from "./actions/addresses.action";
import Profil from "./Components/Profil";

const App = () => {
  const dispatch = useDispatch();

  useState(() => {
    const schoolItem = window.localStorage.getItem("school");
    if (schoolItem) {
      const school = JSON.parse(schoolItem);
      dispatch(getCurrentSchool(school));
      dispatch(getAddresses(school.id))
    }
  }, []);

  return (
    <>
      <Router>
        <div className="h-screen lg:flex overflow-auto bg-white">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/ecole" component={Schools} />
            <Route exact path="/adresses" component={Addresses} />
            <Route exact path="/professeurs" component={Teachers} />
            <Route exact path="/profil" component={Profil} />
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;
