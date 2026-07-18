import { useState } from 'react';
import CustomFormField from '../components/customFormField';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import '../styles/LoginStyle.css';
import { useToken } from '../context/TokenContext';
import NormalPopup from '../components/NormalPopup';
import api from '../api/axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const developers = [
  {
    name: 'Krima Madhikarmi',
    role: 'Frontend Engineer',
    linkedin: 'https://www.linkedin.com/in/krima-madhikarmi/',
    github: 'https://github.com/krimamadhikarmi',
  },
  {
    name: 'Shishant Shrestha',
    role: 'Backend and Database Developer',
    linkedin: 'https://www.linkedin.com/in/csant26',
    github: 'https://github.com/csant26',
  },
  {
    name: 'Sarina Shrestha',
    role: 'UI/UX Designer',
    linkedin: 'https://www.linkedin.com/in/sarina-shrestha-6224802b0/',
    github: 'https://github.com/SarinaStha0',
  },
];

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setToken, setRole, setId } = useToken();
  const [errorMessage, setErrorMessage] = useState(null);
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
      const response = await api.post(
        '/Auth/Login',
        { username, password },
        { validateStatus: (status) => status < 500 },
      );

      // setResponseMessage(response.data.message); // Handle the response data

      console.log('Response data:', response.data);

      if (response.status === 200) {
        const jwtToken = {
          jwtToken: response.data.jwtToken,
        };
        const userRole = response.data.role;
        const userId = response.data.id;
        console.log(response.data.id);
        console.log(response.data);

        console.log('Token data:', jwtToken);
        console.log('role', userRole);
        setToken(jwtToken);
        setRole(userRole);
        setId(userId);

        navigate('/dashboard');
      } else if (response.status === 400) {
        console.log('Setting error message:', response.data);

        setErrorMessage(response.data || 'Something went wrong. Please try again.');
      }
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
    <main className="login-page">
      <section className="login-body" aria-labelledby="login-title">
        <div id="loginBox">
          <div id="title">
            <p className="login-kicker">CampusBridge</p>
            <h1 id="login-title">Hello and Welcome!</h1>
            <p className="login-access-note">Sign in with an account provided by your institution.</p>
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
                <input type="submit" value="Sign in" />
              </div>
            </form>
          </div>
          <a className="learn-more-link" href="#about">
            Learn about CampusBridge
          </a>
        </div>
      </section>

      <section className="about-section" id="about" aria-labelledby="about-title">
        <div className="section-content">
          <p className="section-kicker">Why CampusBridge</p>
          <h2 id="about-title">One connected academic ecosystem</h2>
          <p className="about-intro">
            Academic information often moves in one direction through disconnected channels, taking
            too long to reach students, teachers, colleges, and universities. CampusBridge brings
            them together in one digital system so information can move clearly and efficiently.
          </p>

          <div className="feature-list">
            <div className="feature-item">
              <strong>Connected communication</strong>
              <span>Keep every part of the academic community informed.</span>
            </div>
            <div className="feature-item">
              <strong>Digital academics</strong>
              <span>Manage assignments, attendance, articles, and other academic work online.</span>
            </div>
            <div className="feature-item">
              <strong>Intelligent scheduling</strong>
              <span>
                Build exam schedules around subject priorities, required gaps, holidays, and
                weekdays.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section" aria-labelledby="team-title">
        <div className="section-content">
          <p className="section-kicker">The team</p>
          <h2 id="team-title">Built by</h2>
          <div className="developer-list">
            {developers.map((developer) => (
              <div className="developer" key={developer.name}>
                <div>
                  <h3>{developer.name}</h3>
                  <p>{developer.role}</p>
                </div>
                <div className="developer-links">
                  <a
                    href={developer.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${developer.name} on LinkedIn`}
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                    LinkedIn
                  </a>
                  <a
                    href={developer.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${developer.name} on GitHub`}
                  >
                    <FontAwesomeIcon icon={faGithub} />
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {errorMessage && (
        <NormalPopup title="Login Failed" message={errorMessage} onClose={() => setErrorMessage(null)} />
      )}
    </main>
  );
};
export default Login;
