import { Route, Switch } from "react-router-dom";
import React from "react";
import './App.css';
import Header from '../Header/Header';
import Movies from "../Movies/Movies";
import Main from "../Main/Main";
import Footer from '../Footer/Footer';
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import Profile from "../Profile/Profile";
import SavedMovies from "../SavedMovies/SavedMovies";

const App = () => {
  return (
    <div className="page">
      <Header />

      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
        <Route path='/movies'>
          <Movies />
        </Route>
        <Route path='/saved-movies'>
          <SavedMovies />
        </Route>
        <Route path='/profile'>
          <Profile />
        </Route>
        <Route path='/sign-in'>
          <Login />
        </Route>
        <Route path='/sign-up'>
          <Register />
        </Route>
        <Route path='*'>
          <NotFoundPage />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
