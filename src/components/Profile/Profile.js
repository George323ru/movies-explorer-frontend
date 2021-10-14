import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import useFormWithValidation from "../../utils/useFormWithValidation";
import "./Profile.css";
import "./_active/profile__button_active.css"

const Profile = ({ handleUpdateUserInfo, handleLogOut }) => {

  const {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
  } = useFormWithValidation();

  const currentUser = useContext(CurrentUserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateUserInfo(values)
  }

  useEffect(() => { }, [currentUser]);

  return (
    <section className="profile">
      <div className="profile__container">
        <form className="profile__form"
          onSubmit={handleSubmit}>
          <h3 className="profile__title">{`Привет, ${currentUser.name}!`}</h3>
          <div className="profile__input-wrapper">
            <div className="profile__input-field">
              <label className="profile__label" htmlFor="name">Имя</label>
              <input
                className='profile__input'
                type='text'
                required
                minLength='2'
                maxLength='25'
                name='name'
                placeholder={currentUser.name}
                value={values.name || ""}
                onChange={handleChange}
                id="name"
              />
            </div>
            <span className="profile__input-error">
              {errors.name}
            </span>
          </div>
          <div className="profile__input-wrapper">
            <div className="profile__input-field">
              <label className="profile__label" htmlFor="email">E-mail</label>
              <input
                className='profile__input'
                type='email'
                required
                minLength='4'
                maxLength='35'
                name='email'
                placeholder={currentUser.email}
                value={values.email || ""}
                onChange={handleChange}
                id="email"
              />
            </div>
            <span className="profile__input-error">
              {errors.email}
            </span>
          </div>
          <button
            className={`profile__button ${isValid
              ? "profile__button_active"
              : ""}`}
            disabled={isValid === false && true}
            type='submit'>
            Редактировать
          </button>
          <Link className='profile__link-logout' to='/sign-up'
            onClick={handleLogOut}>
            Выйти из аккаунта
          </Link>
        </form>
      </div>
    </section>
  );
};

export default Profile;