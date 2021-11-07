import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import useFormWithValidation from "../../utils/useFormWithValidation";
import "./Profile.css";
import "./_active/profile__button_active.css"

const Profile = ({ handleUpdateUserInfo,
  handleLogOut,
  onEditSuccess,
  onEditInfoUserMessage }) => {

  const {
    values,
    handleChange,
    errors,
    isValid,
  } = useFormWithValidation();

  const currentUser = useContext(CurrentUserContext);
  const [showMessage, setShowMessage] = useState(false)
  const [isDisableButton, setIsDisableButton] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.name === undefined) {
      handleUpdateUserInfo(currentUser.name, values.email)
    } else if (values.email === undefined) {
      handleUpdateUserInfo(values.name, currentUser.email)
    } else {
      handleUpdateUserInfo(values.name, values.email)
    }
    setShowMessage(true)
  }

  useEffect(() => { }, [currentUser]);
  useEffect(() => {
    onEditInfoUserMessage()
    setShowMessage(false)

    if (values.name !== undefined) {
      values.name === currentUser.name
        ? setIsDisableButton(true)
        : setIsDisableButton(false)
    }
  }, [values]);


  return (
    <section className="profile">
      <div className="profile__container">
        <form className="profile__form"
          onSubmit={handleSubmit}>
          <h3 className="profile__title">{`Привет, ${currentUser.name}!`}</h3>
          <ul className="profile__input-list">
            <li className="profile__input-wrapper">
              <div className="profile__input-field">
                <label className="profile__label" htmlFor="name">Имя</label>
                <input
                  className='profile__input'
                  type='text'
                  required
                  minLength='6'
                  maxLength='25'
                  name='name'
                  value={values.name || currentUser.name}
                  onChange={handleChange}
                  id="name"
                />
              </div>
              <span className="profile__input-error">
                {errors.name}
              </span>
            </li>

            <li className="profile__input-wrapper">
              <div className="profile__input-field">
                <label className="profile__label" htmlFor="email">E-mail</label>
                <input
                  className='profile__input'
                  type='email'
                  required
                  minLength='4'
                  maxLength='35'
                  name='email'
                  value={values.email || currentUser.email}
                  onChange={handleChange}
                  id="email"
                />
              </div>
              <span className="profile__input-error">
                {errors.email}
              </span>
            </li>
          </ul>
          <span className={`proile__success-message 
          ${showMessage && "proile__success-message_active"}`}>
            {onEditSuccess
              ? "Успешно!"
              : "Не удалось отредактировать данные. Возможно, пользователь с таким именем и E-mail уже существует"}
          </span>
          <button
            className={`profile__button ${!isDisableButton
              ? "profile__button_active"
              : ""}`}
            disabled={isDisableButton}
            type='submit'>
            Редактировать
          </button>
          <Link className='profile__link-logout' to='/'
            onClick={handleLogOut}>
            Выйти из аккаунта
          </Link>
        </form>
      </div>
    </section>
  );
};

export default Profile;