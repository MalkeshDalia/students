import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Registration from "./components/Registration";
import Edit from "./components/Edit";

function App() {
  return (
    <>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/error" component={Error} />
        <Route exact path="/edit/:id" component={Edit} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
