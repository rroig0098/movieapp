import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Pages/Home";
import Media from "./Pages/Media";
import Login from "./Pages/Login";
import Settings from "./Pages/Settings";
import { Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route exact path="/home" component={Home} />
      <Route exact path="/media" component={Media} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/settings" component={Settings} />
    </div>
  );
}

export default App;
