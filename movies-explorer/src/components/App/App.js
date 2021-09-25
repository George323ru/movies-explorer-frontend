import { Route, Switch } from "react-router-dom";
import React from "react";
import './App.css';
import Header from '../Header/Header';
import AboutProject from '../Main/AboutProject/AboutProject';
import Techs from "../Main/Techs/Techs";
import AboutMe from "../Main/AboutMe/AboutMe";
import Portfolio from "../Main/Portfolio/Portfolio"
// import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import Footer from '../Footer/Footer'

const App = () => {
  return (
    <div className="page">
      <Header />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
      { }
      <Footer />
    </div>
  );
}

export default App;
