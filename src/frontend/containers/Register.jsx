import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerRequest } from '../actions';
import Header from '../components/Header';
import twitterIcon from '../assets/static/twitter-icon.png';
import googleIcon from '../assets/static/google-icon.png';
import '../assets/styles/components/Register.scss';

const Register = (props) => {
  const [form, setValues] = useState({
    email: '',
    name: '',
    password: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.registerRequest(form);
    props.history.push('/');
  };

  return (
    <>
      <Header isRegister />
      <section className='register'>
        <section className='register__container'>
          <h2>Regístrate</h2>
          <form className='register__container--form' onSubmit={handleSubmit}>
            <input
              name='name'
              type='text'
              className='input'
              placeholder='Nombre'
              onChange={handleInput}
            />
            <input
              type='text'
              className='input'
              name='email'
              placeholder='Correo'
              onChange={handleInput}
            />
            <input
              name='password'
              type='text'
              className='input'
              placeholder='Contraseña'
              onChange={handleInput}
            />
            <button type='submit' className='button'> Registrarme </button>
          </form>
          <section className='register__container--social-media'>
            <div>
              <img src={googleIcon} alt='Google' />
              Registrarse con Google
            </div>
            <div>
              <img src={twitterIcon} alt='Twitter' />
              Registrarse con Twitter
            </div>
          </section>
          <p className='register__container--register'>
            Ya tienes cuenta?
            <Link to='/login'> Inicia sesión.</Link>
          </p>
        </section>
      </section>
    </>
  );
};

const mapDispatchToProps = {
  registerRequest,
};

export default connect(null, mapDispatchToProps)(Register);
