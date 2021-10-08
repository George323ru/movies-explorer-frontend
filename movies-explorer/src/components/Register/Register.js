import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  return (
    <section className="authorization">
      <div className="authorization__container">
        <form className="authorization__form">
          <h3 className="authorization__title">Добро пожаловать!</h3>
          <div className="authorization__input-wrap">
            <label className="authorization__label" for="name">Имя</label>
            <input
              type='text'
              required
              minLength='2'
              maxLength='200'
              name='text'
              className='authorization__input'
              id="name"
            />
            <label className="authorization__label" for="email">E-mail</label>
            <input
              type='email'
              required
              minLength='2'
              maxLength='200'
              name='email'
              className='authorization__input'
              id="email"
            />
            <label className="authorization__label" for="password">Пароль</label>
            <input
              type='password'
              required
              minLength='2'
              maxLength='200'
              name='password'
              className='authorization__input'
              id="password"
            />
          </div>
          <button className='authorization__button' type='submit'>
            Зарегистрироваться
          </button>
          <p className='authorization__suggest'>
            Уже зарегистрированы?
            <Link className='authorization__link' to='/sign-in'>
              Войти
            </Link>
          </p>

        </form>


      </div>
    </section>
  );
};

export default Register;