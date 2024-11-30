import { useNavigate } from 'react-router-dom';
import ChatBox from '../components/Chatbox';
// import Navbar from '../components/Navbar';
import { useToken } from '../context/TokenContext';
import '../styles/Dashboard.css';
import Navbar from '../components/Navbar';

const DashBoard = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/calendar');
  };

  return (
    <>
      <Navbar />
      <div className="dashContent">
        <div className="content1">
          <div className="box box1">
            Todays Event
            <div className="maincontent">
              <p> No content</p>
            </div>
          </div>
          <div className=" box box2" onClick={handleClick} style={{ cursor: 'pointer' }}>
            Academic Calendar
          </div>
        </div>
        <div className="content2">
          Upcoming Event
          <div className="maincontent">
            <p> No content</p>
          </div>
        </div>
      </div>
      <ChatBox />
    </>
  );
};
export default DashBoard;
