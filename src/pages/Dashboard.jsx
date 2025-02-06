// import { useNavigate } from 'react-router-dom';
import ChatBox from '../components/Chatbox';
// import Navbar from '../components/Navbar';
// import { useToken } from '../context/TokenContext';
import '../styles/Dashboard.css';
import Navbar from '../components/Navbar';
import { add, eachDayOfInterval, endOfMonth, format, isSameDay, parse, parseISO, startOfToday } from 'date-fns';
import { useState, useEffect } from 'react';
import axios from 'axios';

import DashCalendar from '../components/calendar/DashCalendar';

import EventDisplay from '../components/calendar/EventDisplay';
import PieChart from '../components/PieChart';
import { useToken } from '../context/TokenContext';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const DashBoard = () => {
  // const meetings = [
  //   {
  //     id: 1,
  //     date: '2025-1-04',
  //     title: 'Project Discussion',
  //     time: '10:00 AM',
  //     description: 'Discuss the university management system progress.',
  //     location: 'Conference Room A',
  //   },
  //   {
  //     id: 2,
  //     date: '2025-1-06',
  //     title: 'Code Review',
  //     time: '2:00 PM',
  //     description: 'Review the codebase for the frontend module.',
  //     location: 'Online - Zoom',
  //   },
  //   {
  //     id: 3,
  //     date: '2025-1-19',
  //     title: 'Presentation Rehearsal',
  //     time: '11:00 AM',
  //     description: 'Rehearse the upcoming project presentation.',
  //     location: 'Lab 5',
  //   },
  // ];

  // const { role } = useToken();

  let colStartClasses = ['', 'col-start-2', 'col-start-3', 'col-start-4', 'col-start-5', 'col-start-6', 'col-start-7'];

  const { role } = useToken();
  const {id:userId} = useToken();
  // const role = 'University';

  let today = startOfToday();
  let [selectedDay, setSelectedDay] = useState(today);
  let [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'));
  let firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date());

  const [meetings, setMeetings] = useState([]);

  const[username,setUsername]=useState('');
  const fetchUserNameDetails = async () =>{
    const response = await axios.get(`https://localhost:7276/api/Auth/GetDataFromId?id=${userId}`);
    const name = response.data.name;
    setUsername(name);
    console.log(username);
  }

  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });

  function previousMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'));
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'));
  }

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const response = await axios.get(`https://localhost:7276/api/Schedule/GetScheduleByRole?Role=${role}`);
        console.log('result from getschedulebyrole:',response.data);

        let examSchedule = response.data || [];
        let teacherSchedule = [];
        //setMeetings(response.data); // Uncomment this if you want to update state with the fetched data
        
        if(role.includes('Teacher')){
          const response2 = await axios.get(`https://localhost:7276/api/Schedule/GetScheduleByTeacherId?Id=${userId}`);

          console.log('result from getschedulebyteacherid',response2.data);

          teacherSchedule = response2.data || [];
        }
        setMeetings([...examSchedule, ...teacherSchedule]);
        const schedule1 = response.data;
        console.log(schedule1);
      } catch (e) {
        console.error(e);
      }
    };
    fetchSchedule();
    fetchUserNameDetails();
  }, []);

  let selectedDayMeetings = meetings.filter(
    (meeting) => meeting.date && isSameDay(parseISO(meeting.date), selectedDay),
  );
  return (
    <>
      <Navbar />
        <div className="greetingBox">
            Hello, {username}!
        </div>
      <div className="dashContent">
        <div className="content1">
          {/* <div className="box box1">
            Todays Event
            <div className="maincontent">
              <p> No content</p>
            </div>
          </div> */}
          <div className="box box1">
            {console.log(meetings)}
            <DashCalendar
              previousMonth={previousMonth}
              firstDayCurrentMonth={firstDayCurrentMonth}
              nextMonth={nextMonth}
              days={days}
              classNames={classNames}
              colStartClasses={colStartClasses}
              setSelectedDay={setSelectedDay}
              selectedDay={selectedDay}
              meetings={meetings}
              // handleDateClick={handleDateClick}
              selectedDayMeetings={selectedDayMeetings}
            />
          </div>
          <EventDisplay selectedDay={selectedDay} selectedDayMeetings={selectedDayMeetings} />
        </div>

        {/* <div className="content2">
          Upcoming Event
          <div className="maincontent">
            <p> No content</p>
          </div>
        </div> */}
        {role.includes('University') && (
          <div className="content2">
            <h3 className="dataTitle">Data Overview</h3>
            <PieChart />
          </div>
        )}
      </div>
      <ChatBox />
    </>
  );
};
export default DashBoard;
