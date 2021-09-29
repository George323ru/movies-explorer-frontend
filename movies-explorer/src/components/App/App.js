import { Route, Switch } from "react-router-dom";
import React from "react";
import './App.css';
import Header from '../Header/Header';
import Promo from "../Main/Promo/Promo";
import Movies from "../Movies/Movies";
import MoviesCard from "../Movies/MoviesCard/MoviesCard";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import Main from "../Main/Main";
import SearchForm from "../Movies/SearchForm/SearchForm";
import AboutProject from '../Main/AboutProject/AboutProject';
import Techs from "../Main/Techs/Techs";
import AboutMe from "../Main/AboutMe/AboutMe";
import Portfolio from "../Main/Portfolio/Portfolio"
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import Footer from '../Footer/Footer';
import Register from "../Register/Register";
import Login from "../Login/Login";


const App = () => {
  return (
    <div className="page">
      <Header />
      <Switch>
        <ProtectedRoute
          exact
          path='/'
          component={Main}
        />
        <Route path='/sign-in'>
          <Login />
        </Route>
        <Route path='/sign-up'>
          <Register />
        </Route>
      </Switch>
      <Movies />
      <MoviesCard />
      <MoviesCardList />
      <SearchForm />
      <Promo />
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
