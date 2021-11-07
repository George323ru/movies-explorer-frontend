import { useState } from "react";
import { Link } from "react-router-dom";
import useFormWithValidation from "../../utils/useFormWithValidation"
import "./Register.css";


const Register = ({ handleRegister }) => {

  const {
    handleChange,
    errors,
    isValid,
  } = useFormWithValidation();

  const [registerData, setRegisterData] = useState({ name: "", email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = registerData;

    handleRegister({ name, email, password });
  };

  const handleChangeInput = (e) => {
    handleChange(e)
    const { name, value } = e.target;
    setRegisterData({
      ...registerData,
      [name]: value,
    });
  };

  return (
    <section className="authorization">
      <div className="authorization__container">
        <form className="authorization__form" onSubmit={handleSubmit}>
          <h3 className="authorization__title">Добро пожаловать!</h3>
          <div className="authorization__input-wrap">
            <label className="authorization__label" htmlFor="name">Имя</label>
            <input
              type='text'
              required
              minLength='4'
              maxLength='200'
              name='name'
              value={registerData.name}
              onChange={handleChangeInput}
              className='authorization__input'
              id="name"
            />
            <span className="authorization__input-error">
              {errors.name}
            </span>
            <label className="authorization__label" htmlFor="email">E-mail</label>
            <input
              type='email'
              required
              minLength='4'
              maxLength='30'
              name='email'
              value={registerData.email}
              onChange={handleChangeInput}
              className='authorization__input'
              id="email"
            />
            <span className="authorization__input-error">{errors.email}</span>
            <label className="authorization__label" htmlFor="password">Пароль</label>
            <input
              type='password'
              required
              minLength='4'
              maxLength='200'
              value={registerData.password}
              onChange={handleChangeInput}
              name='password'
              className='authorization__input'
              id="password"
            />
            <span className="authorization__input-error">{errors.password}</span>
          </div>
          <button
            disabled={isValid === false && true} className={`authorization__button ${isValid === false && "authorization__button_disabled"}`}
            type='submit'>
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