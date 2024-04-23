import React from 'react';
import styles from "./loginform.module.css";

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = React.useState('');
  const [errorInput, setErrorInput] = React.useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setErrorInput('');
  };

  const handleButtonClick = () => {
    if (username.trim() === '') {
      setErrorInput('El usuario no puede tener carácteres vacios');
      setTimeout(() => {
        setErrorInput('');
      }, 2000);
    } else {
      onLogin(username);
    }
  };

  return (
    <div className={styles.centered__content + " container"}>
      <h1 className={styles.login__title}>Welcome to things to do</h1>

      <div className={styles.login__form}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={handleUsernameChange}
        />
        {errorInput && <p>{errorInput}</p>}
        <button onClick={handleButtonClick}>Enter</button>
      </div>
    </div>
  );
};

export default LoginForm;
