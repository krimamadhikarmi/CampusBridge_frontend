import ChatBox from '../components/Chatbox';
import Navbar from '../components/Navbar';
import '../styles/Dashboard.css';


const DashBoard = () => {
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
          <div className=" box box2">Academic Calendar</div>
        </div>
        <div className="content2">
          Upcoming Event
          <div className="maincontent">
            <p> No content</p>
          </div>
        </div>
      </div>
      <ChatBox/>
    </>
  );
};
export default DashBoard;
