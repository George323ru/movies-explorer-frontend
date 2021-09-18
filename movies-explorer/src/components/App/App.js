import { Route, Switch } from "react-router-dom";
import { React, useState, useEffect } from "react";
import './App.css';
import Header from '../Header/Header'
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import Footer from '../Footer/Footer'

const App = () => {
  return (
    <div className="page">
      <Header />
      <Switch>
        <Route exact path="/"></Route>
        <ProtectedRoute />
        <Route exact path="/signup"></Route>
        <Route exact path="/signin"></Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
