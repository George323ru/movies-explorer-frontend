import { Route, Switch } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Redirect, useHistory } from "react-router";
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
import * as auth from "../../utils/auth";
import mainApi from "../../utils/MainApi";

const App = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  // const [register, setRegister] = useState(false);
  const [userData, setUserData] = useState({
    id: "",
    email: "",
  });

  const [savedMovies, setSavedMovies] = useState([]);
  const [isLoadingFilmSuccess, setIsLoadingFilmSuccess] = useState(true);
  const history = useHistory();

  const handleError = () => (err) => console.error(err);

  useEffect(() => {
    checkToken();
    // eslint-disable-next-line
  }, []);

  const checkToken = () => {
    const jwt = localStorage.getItem("jwt");

    if (jwt) {
      auth
        .checkToken(jwt)
        .then((res) => {
          mainApi.setItemToken(jwt);
          setUserData({
            id: res._id,
            email: res.email,
          });
          setLoggedIn(true);
          history.push("/movies");
        })
        .catch(handleError);
    } else {
      setLoggedIn(false);
      console.log('Пустой токен');
    }
  };

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
      .catch(handleError);
  };

  const handleLogin = ({ email, password }) => {

    auth
      .authorize(email, password)
      .then((data) => {
        console.log(data)

        if (data) {
          localStorage.setItem("jwt", data.token);
          mainApi.setItemToken(data.token)
        }
        setLoggedIn(true);
        history.push("/movies");
      })
      .catch(handleError);
  };

  useEffect(() => {
    if (loggedIn) {
      Promise.all([mainApi.getUserInfo(), mainApi.getMovies()])
        .then(([userInfo, moviesInfo]) => {
          setCurrentUser(userInfo);
          setSavedMovies(moviesInfo);
        })
        .catch((err) => console.log("Ошибка при получении данных, " + err));
    }
  }, [loggedIn]);

  const handleSaveMovie = ({ movie }) => {
    setIsLoadingFilmSuccess(false)
    const {
      country,
      director,
      duration,
      year,
      description,
      image,
      id,
      trailerLink,
      nameRU,
      nameEN,
    } = movie;

    mainApi
      .saveMovie(
        {
          country,
          director,
          duration,
          year,
          description,
          image,
          id,
          trailerLink,
          nameRU,
          nameEN,
        }
      )
      .then((res) => {
        setIsLoadingFilmSuccess(true)
        setSavedMovies([res, ...savedMovies])
      })
  }
  console.log(savedMovies)

  const handleDeleteMovie = ({ nameRU }) => {
    let movieId = savedMovies.find((item) => item.nameRU === nameRU)

    mainApi
      .deleteMovie({ movieId })
  }


  return (
    <div className="page">
      <Header />

      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
        <Route path='/movies'>
          <Movies
            handleError={handleError}
            handleSaveMovie={handleSaveMovie}
            handleDeleteMovie={handleDeleteMovie}
          />
        </Route>
        <Route path='/saved-movies'>
          <SavedMovies
            handleDeleteMovie={handleDeleteMovie}
            savedMovies={savedMovies}
            isLoadingFilmSuccess={isLoadingFilmSuccess}
          />
        </Route>
        <Route path='/profile'>
          <Profile />
        </Route>
        <Route path='/sign-in'>
          <Login handleLogin={handleLogin} />
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
