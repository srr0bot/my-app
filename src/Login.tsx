import React, { useState } from 'react';
import LoginForm from './LogicForm';
import LoginSuccess from './LoginSucess';
import LoginFailure from './LoginFailure';

const Login = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSuccess = () => {
    setLoggedIn(true);
    setLoginFailed(false);
  };

  const handleFailure = () => {
    setLoggedIn(false);
    setLoginFailed(true);
  };

  if (loggedIn) {
    return <LoginSuccess />;
  }

  if (loginFailed) {
    return <LoginFailure />;
  }

  return <LoginForm onSuccess={handleSuccess} onFailure={handleFailure} />;
};

export default Login;