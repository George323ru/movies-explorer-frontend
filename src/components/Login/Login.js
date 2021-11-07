import { useState } from "react";
import { Link } from "react-router-dom";
import useFormWithValidation from "../../utils/useFormWithValidation";
import "./Login.css";

const Login = ({ handleLogin }) => {
  const {
    handleChange,
    errors,
    isValid,
  } = useFormWithValidation();
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = loginData;

    handleLogin({ email, password });
  };

  const handleChangeInput = (e) => {
    handleChange(e)
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };


  return (
    <section className="authorization">
      <div className="authorization__container">
        <form
          className="authorization__form"
          onSubmit={handleSubmit}>
          <h3 className="authorization__title">Рады видеть!</h3>
          <div className="authorization__input-wrap">
            <label className="authorization__label" htmlFor="email">E-mail</label>
            <input
              type='email'
              required
              minLength='2'
              maxLength='200'
              name='email'
              onChange={handleChangeInput}
              className='authorization__input'
              id="email"
            />
            <span className="authorization__input-error">
              {errors.email}
            </span>
            <label className="authorization__label" htmlFor="password">Пароль</label>
            <input
              type='password'
              required
              minLength='2'
              maxLength='200'
              name='password'
              className='authorization__input'
              onChange={handleChangeInput}
              id="password"
            />
            <span className="authorization__input-error">
              {errors.password}
            </span>
          </div>
          <button
            disabled={isValid === false && true} className={`authorization__button ${isValid === false && "authorization__button_disabled"}`}
            type='submit'>
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