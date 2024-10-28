import { useState } from 'react';
import CustomFormField from '../components/customFormField';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

import '../styles/LoginStyle.css';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email.length === 0) {
      alert('Please enter the email');
      return;
    }
    if (password.length === 0) {
      alert('Please enter the password');
      return;
    }
    console.log('email', email);
    console.log('password', password);
    navigate('/dashboard');
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  return (
    <>
      <div id="loginBox">
        <div id="title">
          <h2>Login Page</h2>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <CustomFormField
              label="Email"
              cname="Email"
              placeholder="Enter your email"
              type="email"
              value={email}
              onChange={handleEmail}
            />
            <CustomFormField
              label="Password"
              cname="password"
              placeholder="Enter your password"
              type="password"
              value={password}
              onChange={handlePassword}
            />

            <div id="login-button">
              <input type="submit" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
