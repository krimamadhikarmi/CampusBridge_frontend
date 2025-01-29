import '../../styles/Calendar.css';
import '../../styles/common.css';
import axios from 'axios';

import { add, eachDayOfInterval, endOfMonth, format, isSameDay, parse, parseISO, startOfToday } from 'date-fns';

import { useReducer, useState } from 'react';

import { useEffect } from 'react';
import { DateReducer, GapReducer, initialDate, initialGap } from '../../hooks/reducer';
import { useToken } from '../../context/TokenContext';
import Navbar from '../Navbar';
import ScheduleContainer from './ScheduleContainer';
import AddExamForm from './AddExamForm';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Calendar = () => {
  let today = startOfToday();
  let [selectedDay, setSelectedDay] = useState(today);
  let [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'));
  let firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date());
  const [pop, setPop] = useState(false);
  const [udate, setUdate] = useState('');
  const [gaps, setGap] = useState('');
  const [semester, setSemester] = useState('');
  const [startdate, setStartDate] = useState('');
  const [enddate, setEndDate] = useState('');
  const [meetings, setMeetings] = useState([]);

  const { role } = useToken();

  const [dateState, datedispatch] = useReducer(DateReducer, initialDate);
  const [gapState, gapdispatch] = useReducer(GapReducer, initialGap);

  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const response = await axios.get('https://localhost:7276/api/Schedule/GetScheduleByRole?Role=Student');
        console.log(response.data);

        setMeetings(response.data); // Uncomment this if you want to update state with the fetched data
        const schedule1 = response.data;
        console.log(schedule1);
      } catch (e) {
        console.error(e);
      }
    };
    fetchSchedule();
  }, []);

  function previousMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'));
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'));
  }

  const handlePop = () => {
    setPop(!pop);
  };

  const handleDateField = (event) => {
    event.preventDefault();
    datedispatch({ type: 'ADD', name: 'UnavailableDates', placeholder: 'Enter unavailable dates', value: '' });
  };

  const handleUpdateDate = (event, id) => {
    const value = event.target.value;
    setUdate(value);
    datedispatch({ type: 'UPDATE', id: id, value: value });
  };

  const handleAddDate = (event) => {
    event.preventDefault();
    console.log('added date');
  };

  const handleGapField = (event) => {
    event.preventDefault();
    gapdispatch({ type: 'ADD', name: 'GapBetweenExams', placeholder: 'Enter gap ', value: '' });
  };

  const handleUpdateGap = (event, id) => {
    const value = event.target.value;
    setGap(value);
    gapdispatch({ type: 'UPDATE', id: id, value: value });
  };

  const handleAddGap = (event) => {
    event.preventDefault();
    console.log('added date');
  };

  const handleSubmit = async (scheduleData) => {
    // event.preventDefault();

    const completeScheduleData = {
      semester: scheduleData.semester,
      startDate: scheduleData.startDate,
      endDate: scheduleData.endDate,
      unavailableDates: scheduleData.unavailableDates,
      gapBetweenExams: scheduleData.gapBetweenExams,
    };

    console.log(JSON.stringify(completeScheduleData), 'complete');

    try {
      const response = await axios.post(
        'https://localhost:7276/api/Schedule/CreateExamSchedule',
        JSON.stringify(completeScheduleData),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      console.log('schedule', response);
    } catch (e) {
      console.log(e);
    }
  };

  // let selectedDayMeetings = meetings.filter((meeting) => isSameDay(parseISO(meeting.date), selectedDay));
  let selectedDayMeetings = meetings.filter(
    (meeting) => meeting.date && isSameDay(parseISO(meeting.date), selectedDay),
  );

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="schedule-container">
          <ScheduleContainer
            previousMonth={previousMonth}
            firstDayCurrentMonth={firstDayCurrentMonth}
            nextMonth={nextMonth}
            role={role}
            handlePop={handlePop}
            days={days}
            classNames={classNames}
            // colStartClasses={colStartClasses}
            setSelectedDay={setSelectedDay}
            selectedDay={selectedDay}
            meetings={meetings}
            selectedDayMeetings={selectedDayMeetings}
          />
        </div>
        {pop && (
          <AddExamForm
            handlePop={handlePop}
            handleSubmit={handleSubmit}
            semester={semester}
            setSemester={setSemester}
            startdate={startdate}
            setStartDate={setStartDate}
            enddate={enddate}
            setEndDate={setEndDate}
            dateState={dateState}
            handleAddDate={handleAddDate}
            handleUpdateDate={handleUpdateDate}
            handleDateField={handleDateField}
            handleAddGap={handleAddGap}
            gapState={gapState}
            handleUpdateGap={handleUpdateGap}
            handleGapField={handleGapField}
          />
        )}
      </div>
    </>
  );
};