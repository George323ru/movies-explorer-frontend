import { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = ({ handleRegister }) => {
  const [registerData, setRegisterData] = useState({ name: "", email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = registerData;
    console.log({ name, email, password })
    handleRegister({ name, email, password });
  };



  const handleChange = (e) => {
    console.log(e.target)
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
            <label className="authorization__label" for="name">Имя</label>
            <input
              type='text'
              required
              minLength='2'
              maxLength='200'
              name='name'
              value={registerData.name}
              onChange={handleChange}
              className='authorization__input'
              id="name"
            />
            <span className="authorization__input-error"></span>
            <label className="authorization__label" for="email">E-mail</label>
            <input
              type='email'
              required
              minLength='2'
              maxLength='200'
              name='email'
              value={registerData.email}
              onChange={handleChange}
              className='authorization__input'
              id="email"
            />
            <span className="authorization__input-error"></span>
            <label className="authorization__label" for="password">Пароль</label>
            <input
              type='password'
              required
              minLength='2'
              maxLength='200'
              value={registerData.password}
              onChange={handleChange}
              name='password'
              className='authorization__input'
              id="password"
            />
            <span className="authorization__input-error"></span>
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