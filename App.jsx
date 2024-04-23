import React, { useEffect } from 'react';
import HomePage from './components/home/HomePage';
import LoginForm from './components/login/LoginForm';


function App() {
  const [username, setUsername] = React.useState('')

  useEffect(() => {
    const storedUsername = localStorage.getItem('username')
    if (storedUsername) {
      setUsername(storedUsername)
    }
  }, []);

  const handleLogin = (newUsername) => {
    console.log('Login', newUsername)
    localStorage.setItem('username', newUsername)
    setUsername(newUsername)
  }

  const handleLogout = () => {
    localStorage.removeItem('username')
    setUsername('')
  }

  return (
    <>
      {username 
      ? <HomePage username={username} onLogout={handleLogout} /> 
      : <LoginForm onLogin={handleLogin} />}
    </>
  )
}

export default App;
