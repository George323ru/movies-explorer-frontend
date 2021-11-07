import { Route, Switch } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Redirect, useHistory } from "react-router";
import './App.css';
import moviesApi from "../../utils/MoviesApi";
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
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute"
import PopupInfoTooltip from "../PopupInfoTooltip/PopupInfoTooltip";

const App = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isEditSuccess, setIsEditSuccess] = useState(false);
  const [isLoadingFilmSuccess, setIsLoadingFilmSuccess] = useState(true);
  const [isInfoTooltip, setIsInfoTooltip] = useState(false)
  const history = useHistory();

  const handleError = () => (err) => console.error(err);

  useEffect(() => {
    checkToken();
    // eslint-disable-next-line
  }, []);

  const checkToken = () => {
    setIsLoading(true);
    const jwt = localStorage.getItem("jwt");
    console.log('check')
    if (jwt) {
      auth
        .checkToken(jwt)
        .then(() => {
          mainApi.setItemToken(jwt);

          setIsLoading(false);
          setLoggedIn(true);
          // history.push("/movies");
        })
        .catch(handleError);
    } else {
      setLoggedIn(false);
    }
  };

  const handleRegister = ({ name, email, password }) => {
    setIsLoading(true);

    auth
      .register(name, email, password)
      .then((res) => {
        const { email, _id } = res;
        auth.authorize(email, password)
          .then((data) => {
            if (data) {
              localStorage.setItem("jwt", data.token);
              mainApi.setItemToken(data.token)
            }
            setLoggedIn(true);
            setCurrentUser(email, _id)
            setIsLoading(false);
            history.push("/movies");
          })
          .catch((err) => {
            setIsInfoTooltip(true)
            handleError(err)
          })
      })
      .catch((err) => {
        setIsInfoTooltip(true)
        handleError(err)
      });
  };

  const handleLogin = ({ email, password }) => {
    setIsLoading(true);

    auth
      .authorize(email, password)
      .then((data) => {

        if (data) {
          localStorage.setItem("jwt", data.token);
          mainApi.setItemToken(data.token)
        }
        setIsLoading(false);
        setLoggedIn(true);
        history.push("/movies");
      })
      .catch(handleError);
  };

  const handleLogOut = () => {

    localStorage.removeItem("jwt");
    localStorage.removeItem("saveMovies");
    mainApi.removeItemToken();
    history.push("/");
    setLoggedIn(false);
  };

  useEffect(() => {
    setIsLoading(true)
    console.log('moviesApi')
    moviesApi
      .getBeatFilmMovies()
      .then((films) => {
        setMovies(films);
      })
      .catch((err) => {
        setIsLoading(false)
        handleError(err);
        setIsLoadingFilmSuccess(false);
      });
  }, []);

  const handleUpdateUserInfo = (name, email) => {
    console.log(name, email)
    mainApi
      .updateUserInfo(name, email)
      .then((res) => {
        setCurrentUser(res)
        setIsEditSuccess(true)
      })
      .catch((err) =>
        console.log("Ошибка при отправке новых данных о пользователе, " + err))
  };


  const handleEditInfoUserMessage = () => {
    setIsEditSuccess(false)
  }


  useEffect(() => {
    console.log('mainApi')
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
        console.log(res)
        setIsLoadingFilmSuccess(true)
        setSavedMovies([res, ...savedMovies])
      })
  }

  const handleDeleteMovie = ({ nameRU }) => {
    console.log(nameRU)
    let movieId = savedMovies.find((item) => item.nameRU === nameRU)

    mainApi
      .deleteMovie({ movieId })
      .then((res) => {
        console.log(res)
        setSavedMovies(savedMovies.filter((item) => item._id !== movieId._id));
        console.log(savedMovies)
      })
  }

  const closeAllPopups = () => {

    setIsInfoTooltip(false);

  };

  return (
    <CurrentUserContext.Provider value={currentUser}>

      <div className="page">
        <Header isLogin={loggedIn} />

        <Switch>
          <Route exact path='/'>
            <Main />
          </Route>
          <Route exact path="/">
            {!loggedIn
              ? <Redirect to="/" />
              : <Redirect to="/sign-in" />}
          </Route>
          <ProtectedRoute
            exact
            path='/movies'
            component={Movies}
            loggedIn={loggedIn}
            movies={movies}
            onLoading={isLoading}
            savedMovies={savedMovies}
            handleError={handleError}
            handleSaveMovie={handleSaveMovie}
            handleDeleteMovie={handleDeleteMovie}>
          </ProtectedRoute>
          <ProtectedRoute exact path='/saved-movies'
            component={SavedMovies}
            loggedIn={loggedIn}
            handleSaveMovie={handleSaveMovie}
            handleDeleteMovie={handleDeleteMovie}
            savedMovies={savedMovies}
            isLoadingFilmSuccess={isLoadingFilmSuccess}>
          </ProtectedRoute>
          <ProtectedRoute exact path='/profile'
            component={Profile}
            loggedIn={loggedIn}
            onEditSuccess={isEditSuccess}
            onEditInfoUserMessage={handleEditInfoUserMessage}
            handleUpdateUserInfo={handleUpdateUserInfo}
            handleLogOut={handleLogOut}>
          </ProtectedRoute>
          <Route exact path='/sign-in'>
            {!loggedIn
              ? <Login handleLogin={handleLogin} />
              : <Redirect to="/movies" />
            }

            {/* <Login handleLogin={handleLogin} /> */}
          </Route>
          <Route exact path='/sign-up'>
            {!loggedIn
              ? <Register handleRegister={handleRegister} />
              : <Redirect to="/movies" />
            }
            {/* <Register handleRegister={handleRegister} /> */}
          </Route>
          <Route path='*'>
            <NotFoundPage />
          </Route>

        </Switch>
        <PopupInfoTooltip
          isOpen={isInfoTooltip}
          onClose={closeAllPopups}
        />

        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
