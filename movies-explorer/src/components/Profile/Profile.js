import { useContext } from "react";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import useFormWithValidation from "../../utils/useFormWithValidation";
import "./Profile.css";

const Profile = () => {

  const {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
  } = useFormWithValidation();

  const currentUser = useContext(CurrentUserContext);
  return (
    <section className="profile">
      <div className="profile__container">
        <form className="profile__form">
          <h3 className="profile__title">{`Привет, ${currentUser.name}!`}</h3>
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
          <button className='profile__button' type='submit'>
            Редактировать
          </button>
          <Link className='profile__link-logout' to='/sign-up'>
            Выйти из аккаунта
          </Link>
        </form>
      </div>
    </section>
  );
};

export default Profile;