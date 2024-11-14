import { useState } from 'react';
import CustomFormField from '../components/customFormField';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import '../styles/LoginStyle.css';
import { useToken } from '../context/TokenContext';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {setToken,setRole} = useToken();
  const navigate = useNavigate();

  // const handleSubmit = async (event) => {
  //   console.log("token",token)
  //   event.preventDefault();
  //   const payload = { username, password }; // Create the payload
  //   console.log('Payload:', payload); // Log the payload for debugging
  //   try {
  //     const response = await fetch('https://localhost:7276/api/Auth/Login', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ username, password }),
  //     });

  //     const data = await response.json();
  //     console.log('Response:', response);
  //     console.log('Login response data:', data);

  //     if (response.ok) {
  //       console.log('Login successful, navigating to dashboard');
  //       setToken(data);
  //       console.log(data)
  //       navigate('/dashboard');
  //     } else {
  //       throw new Error(data.message || 'Invalid username or password');
  //     }
  //   } catch (err) {
  //     console.error('Login failed:', err);
  //   }
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://localhost:7276/api/Auth/Login', { username, password });
      // setResponseMessage(response.data.message); // Handle the response data
      console.log('Response data:', response.data);
      const jwtToken = {
        jwtToken: response.data.jwtToken,
      };
      const userRole = response.data.role;

      console.log('Token data:', jwtToken);
      console.log('role', userRole);
      setToken(jwtToken);
      setRole(userRole);
      navigate('/dashboard');
    } catch (error) {
      console.error('Error during POST request:', error);
      console.log(error.response.data.message);
      // setResponseMessage(error.response?.data?.message || 'Error occurred');
    }
  };

  const handleEmail = (event) => {
    setUsername(event.target.value);
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
              value={username}
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
