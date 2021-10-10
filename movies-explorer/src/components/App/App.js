import { Route, Switch } from "react-router-dom";
import React, { useState, useEffect } from "react";
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
import * as auth from "../../utils/auth"
import { Redirect, useHistory } from "react-router";

const App = () => {
  // const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  // const [register, setRegister] = useState(false);
  const [userData, setUserData] = useState({
    id: "",
    email: "",
  });
  const history = useHistory();


  const handleRegister = ({ name, email, password }) => {
    auth
      .register(name, email, password)
      .then((res) => {
        const { email, _id } = res;
        setUserData({
          id: _id,
          email: email,
        });
        history.push("/sign-in");
      })
      .catch((err) => {
      });
  };

  const handleLogin = ({ email, password }) => {
    auth
      .authorize(email, password)
      .then((data) => {
        setUserData({
          ...userData,
          email: email,
        });
        if (data) {
          localStorage.setItem("jwt", data.token);
          api.setItemToken(data.token);
        }
        setLoggedIn(true);
        history.push("/");
      })
      .catch(handleError);
  };

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
          <Register handleRegister={handleRegister} />
        </Route>
        <Route path='*'>
          <NotFoundPage />
        </Route>
        <Route path="/">
          {loggedIn ? <Redirect to="/movies" /> : <Redirect to="/" />}
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
