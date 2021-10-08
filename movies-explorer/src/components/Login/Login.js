import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <section className="authorization">
      <div className="authorization__container">
        <form className="authorization__form">
          <h3 className="authorization__title">Рады видеть!</h3>
          <div className="authorization__input-wrap">
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
            Войти
          </button>
          <p className='authorization__suggest'>
            Ещё не зарегистрированы?
            <Link className='authorization__link' to='/sign-up'>
              Регистрация
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;