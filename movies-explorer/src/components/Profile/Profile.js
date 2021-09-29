import { Link } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  return (
    <section className="profile">
      <div className="profile__container">
        <form className="profile__form">
          <h3 className="profile__title">Привет, Виталий!</h3>
          <div className="profile__input-field">
            <label className="profile__label" for="name">Имя</label>
            <input
              type='text'
              required
              minLength='2'
              maxLength='200'
              name='name'
              className='profile__input'
              id="name"
            />
          </div>
          <div className="profile__input-field">
            <label className="profile__label" for="email">E-mail</label>
            <input
              type='email'
              required
              minLength='2'
              maxLength='200'
              name='email'
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