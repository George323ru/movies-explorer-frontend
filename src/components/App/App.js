import { Route, Switch, Redirect } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router";
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
import Preloader from "../Movies/Preloader/Preloader";

const App = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isEditSuccess, setIsEditSuccess] = useState(false);
  const [isLoadingFilmSuccess, setIsLoadingFilmSuccess] = useState(true);
  const [isInfoTooltip, setIsInfoTooltip] = useState(false)
  const history = useHistory();
  const { pathname } = useLocation();

  const handleError = () => (err) => console.error(err);

  useEffect(() => {
    checkToken();
    // eslint-disable-next-line
  }, []);

  const checkToken = () => {
    setIsLoading(true)
    const jwt = localStorage.getItem("jwt");

    if (jwt) {
      auth
        .checkToken(jwt)
        .then(() => {
          mainApi.setItemToken(jwt);

          setLoggedIn(true);
          setIsLoading(false)
          history.push(pathname);
        })
        .catch(handleError);
    } else {
      setLoggedIn(false);
      setIsLoading(false)
    }
  };

  const handleRegister = ({ name, email, password }) => {

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

            history.push("./movies");
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


    auth
      .authorize(email, password)
      .then((data) => {

        if (data) {
          localStorage.setItem("jwt", data.token);
          mainApi.setItemToken(data.token)
        }

        setLoggedIn(true);
        history.push("./movies");
      })
      .catch((err) => {

        setIsInfoTooltip(true)
        handleError(err)
      });

  };

  const handleLogOut = () => {

    localStorage.removeItem("jwt");
    localStorage.removeItem("saveMovies");
    mainApi.removeItemToken();

    setLoggedIn(false);
    history.push("./");
  };

  const handleUpdateUserInfo = (name, email) => {

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

  const handleDeleteMovie = ({ nameRU }) => {

    let movieId = savedMovies.find((item) => item.nameRU === nameRU)

    mainApi
      .deleteMovie({ movieId })
      .then((res) => {
        setSavedMovies(savedMovies.filter((item) => item._id !== movieId._id));
      })
  }

  const closeAllPopups = () => {

    setIsInfoTooltip(false);

  };

  return (
    <CurrentUserContext.Provider value={currentUser}>

      {isLoading
        ? (
          <Preloader />
        )
        : (
          <div className="page">
            <Header isLogin={loggedIn} />

            <Switch>
              <Route exact path='/'>
                <Main />
              </Route>
              <ProtectedRoute
                exact
                path='/movies'
                component={Movies}
                loggedIn={loggedIn}
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
              <Route exact path='/sign-up'>
                <Register handleRegister={handleRegister} />
              </Route>
              <Route exact path='/sign-in'>
                <Login handleLogin={handleLogin} />
              </Route>
              <Route path='*'>
                <NotFoundPage />
              </Route>
              <Route>
                {loggedIn ? <Redirect to="/movies" /> : <Redirect to="/" />}
              </Route>

            </Switch>
            <PopupInfoTooltip
              isOpen={isInfoTooltip}
              onClose={closeAllPopups}
            />

            <Footer />
          </div>
        )}

    </CurrentUserContext.Provider>
  );
}

export default App;
