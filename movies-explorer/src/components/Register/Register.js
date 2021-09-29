import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  return (
    <section className="register">
      <div className="register__container">
        <form className="register__form">
          <h3 className="register__titile">Добро пожаловать!</h3>
          <label className="register__label" for="name">Имя</label>
          <input
            type='text'
            required
            minLength='2'
            maxLength='200'
            name='text'
            className='register__input'
            id="name"
          />
          <label className="register__label" for="email">E-mail</label>
          <input
            type='email'
            required
            minLength='2'
            maxLength='200'
            name='email'
            className='register__input'
            id="email"
          />
          <label className="register__label" for="password">Пароль</label>
          <input
            type='password'
            required
            minLength='2'
            maxLength='200'
            name='password'
            className='register__input'
            id="password"
          />
          <button className='register__button' type='submit'>
            Зарегистрироваться
          </button>
          <p className='register__suggest'>
            Уже зарегистрированы?
            <Link className='register__link' to='/sign-in'>
              Войти
            </Link>
          </p>

        </form>


      </div>
    </section>
  );
};

export default Register;