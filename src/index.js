import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import DashBoard from './pages/Dashboard';
import Syllabus from './pages/student/Syllabus';
import Result from './pages/Result';
import Articles from './pages/Articles';
import Notices from './pages/Notices';
import Help from './pages/student/Help';
import Profile from './pages/Profile';
import Assignment from './pages/student/Assignment';
import { TokenProvider } from './context/TokenContext';
import CreateSyllabus from './pages/university/CreateSyllabus';
import Colleges from './pages/university/Colleges';
import Calendar from './components/calendar/Calendar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <TokenProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/syllabus" element={<Syllabus />} />
          <Route path="/assignment" element={<Assignment />} />
          <Route path="/result" element={<Result />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/notices" element={<Notices />} />
          <Route path="/help" element={<Help />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/createsyllabus" element={<CreateSyllabus/>} />
          <Route path="/colleges" element={<Colleges/>} />
          <Route path="/calendar" element={<Calendar/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </TokenProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
