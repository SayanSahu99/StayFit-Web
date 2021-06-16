import React, { useState } from 'react';
import Helmet from 'react-helmet';
import axios from 'axios';

import { WEBSITE_NAME } from 'src/utils/brand';
import TextInput from 'src/components/forms/TextInput';
import AsyncButton from 'src/components/buttons/AsyncButton';
import 'src/styles/Auth.scss';

const Register = () => {
  const [state, setState] = useState({
    username: 'john',
    email: 'test@mail.com',
    password: '123',
    confirmPassword: '123',
    loading: false,
    errors: [],
  });

  const handleOnChange = async (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setState({ ...state, errors: [] });
    const { username, email, password, confirmPassword } = state;

    if (password !== confirmPassword) {
      setState((prevState) => ({
        ...prevState,
        errors: [{ param: 'confirmPassword', msg: 'Passwords do not match' }],
      }));

      return;
    }

    const formData = { username, email, password };
    try {
      const res = await axios.post('auth/register', formData);

      // TODO : Log in then redirect to today's list
      console.log(res);
    } catch (error) {
      const {
        response: {
          data: { errors },
        },
      } = error;
      setState((prevState) => ({ ...prevState, errors }));
    }
  };

  const { username, email, password, confirmPassword, loading, errors } = state;

  return (
    <div className="form-box text-center p-5 m-5 mx-auto bg-light">
      <Helmet>
        <title>{`${WEBSITE_NAME} - Register`}</title>
      </Helmet>
      <form className="form-signin" onSubmit={handleRegister}>
        <h1 className="form-title h3 mb-5 font-weight-normal">
          Create an account
        </h1>

        <TextInput
          name="username"
          value={username}
          label="Username"
          type="text"
          required
          errors={errors}
          onChange={handleOnChange}
        />
        <TextInput
          name="email"
          value={email}
          label="Email"
          type="email"
          required
          errors={errors}
          onChange={handleOnChange}
        />
        <TextInput
          name="password"
          value={password}
          label="Password"
          type="password"
          required
          errors={errors}
          onChange={handleOnChange}
        />
        <TextInput
          name="confirmPassword"
          value={confirmPassword}
          label="Confirm Password"
          type="password"
          required
          errors={errors}
          onChange={handleOnChange}
        />

        <div className="checkbox my-3">
          <label>
            <input type="checkbox" defaultValue="remember-me" /> Remember me
          </label>
        </div>

        <AsyncButton
          type="submit"
          text="Sign up"
          className="primary-button btn-lg rounded-pill mt-1 py-2 px-4"
          loading={loading}
        />
      </form>
    </div>
  );
};

export default Register;