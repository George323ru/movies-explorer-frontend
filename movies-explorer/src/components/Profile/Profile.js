import { useContext } from "react";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./Profile.css";

const Profile = () => {

  const currentUser = useContext(CurrentUserContext);
  return (
    <section className="profile">
      <div className="profile__container">
        <form className="profile__form">
          <h3 className="profile__title">{`Привет, ${currentUser.name}!`}</h3>
          <div className="profile__input-field">
            <label className="profile__label" htmlFor="name">Имя</label>
            <input
              type='text'
              required
              minLength='2'
              maxLength='200'
              name='name'
              value={currentUser.name}
              className='profile__input'
              id="name"
            />
          </div>
          <div className="profile__input-field">
            <label className="profile__label" htmlFor="email">E-mail</label>
            <input
              type='email'
              required
              minLength='2'
              maxLength='200'
              name='email'
              value={currentUser.email}
              className='profile__input'
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