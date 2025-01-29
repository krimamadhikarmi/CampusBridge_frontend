import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import { format, getDay, isEqual, isSameDay, isSameMonth, isToday, parseISO } from 'date-fns';
import { useToken } from '../../context/TokenContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import AddExamForm from './AddExamForm';
// import { DateReducer, GapReducer, initialDate, initialGap } from '../../hooks/reducer';
// import { useReducer } from 'react';
import axios from 'axios';

import AddTeacherSchedule from './AddTeacherSchedule';
// import { ButtonGroup } from 'flowbite-react';
// import {useState,usE } from 'react';
const DashCalendar = ({
  previousMonth,
  firstDayCurrentMonth,
  nextMonth,
  days,
  classNames,
  setSelectedDay,
  selectedDay,
  meetings,
  // handleDateClick,
}) => {
  const { role } = useToken();
  // const role = 'University';
  // const [selectedSemester, setSelectedSemester] = useState('');
  // const [teachers, setTeachers] = useState([]);
  // const [startDate, setStartDate] = useState('');
  // const [endDate, setEndDate] = useState('');
  // const [breakMinutes, setBreakMinutes] = useState(0);
  // const [slots, setSlots] = useState('');

  // const addHolidays = () => {
  //   if (currentHolidays.trim() !== '') {
  //     setFromData((prev) => ({
  //       ...prev,
  //       holidays: [...prev.holidays, currentHolidays],
  //     }));
  //     setCurrentHolidays('');
  //   }
  // };

  const [addClick, setAddClick] = useState(false);
  // const [semester, setSemester] = useState('');
  // const [startdate, setStartDate] = useState('');
  // const [enddate, setEndDate] = useState('');
  // const [udate, setUdate] = useState('');
  // const [gaps, setGap] = useState('');

  // const [dateState, datedispatch] = useReducer(DateReducer, initialDate);
  // const [gapState, gapdispatch] = useReducer(GapReducer, initialGap);

  // const handleDateField = (event) => {
  //   event.preventDefault();
  //   datedispatch({ type: 'ADD', name: 'UnavailableDates', placeholder: 'Enter unavailable dates', value: '' });
  // };

  // const handleUpdateDate = (event, id) => {
  //   const value = event.target.value;
  //   setUdate(value);
  //   datedispatch({ type: 'UPDATE', id: id, value: value });
  // };

  // const handleAddDate = (event) => {
  //   event.preventDefault();
  //   console.log('added date');
  // };

  // const handleGapField = (event) => {
  //   event.preventDefault();
  //   gapdispatch({ type: 'ADD', name: 'GapBetweenExams', placeholder: 'Enter gap ', value: '' });
  // };

  // const handleUpdateGap = (event, id) => {
  //   const value = event.target.value;
  //   setGap(value);
  //   gapdispatch({ type: 'UPDATE', id: id, value: value });
  // };

  // const handleAddGap = (event) => {
  //   event.preventDefault();
  //   console.log('added date');
  // };

  const handleOnClick = () => {
    setAddClick(!addClick);
    setFormType(''); // Reset formType when toggling the popup
  };

  // const fetchTeachers = async (semester) => {
  //   try {
  //     const response = await fetch(`https://your-api.com/teachers?semester=${semester}`);
  //     if (!response.ok) {
  //       throw new Error('Failed to fetch teachers');
  //     }
  //     const data = await response.json();
  //     setTeachers(data);
  //   } catch (error) {
  //     console.error('Error fetching teacher data:', error);
  //   }
  // };
  // useEffect(() => {
  //   if (selectedSemester) {
  //     fetchTeachers(selectedSemester);
  //   }
  // }, [selectedSemester]);

  const handleCalendarSubmit = async (event, scheduleData) => {
    //event.preventDefault();

    console.log(JSON.stringify(scheduleData), 'Before response');
    const completeScheduleData = {
      semester: scheduleData.semester,
      startDate: new Date(scheduleData.startDate).toISOString(),
      endDate: new Date(scheduleData.endDate).toISOString(),
      unavailableDates: scheduleData.unavailableDates,
      gapBetweenExams: scheduleData.gapBetweenExams,
    };
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
      console.log('schedule', response.data);
    } catch (e) {
      console.log(e);
    }
  };

  const handleTeacherScheduleSubmit = async (teacherSchedule) => {
    const teacherFormData = {
      semester: teacherSchedule.semester,
      startDate: new Date(teacherSchedule.startDate).toISOString(),
      endDate: new Date(teacherSchedule.endDate).toISOString(),
      slotsPerDay: teacherSchedule.slotsPerDay,
      breakMinutes: teacherSchedule.breakMinutes,
      teachers: teacherSchedule.teachers.map((teacher) => ({
        id: teacher.id,
        name: teacher.name,
        availability: teacher.availability,
      })),
      holidays: teacherSchedule.holidays,
    };
    console.log(JSON.stringify(teacherFormData));
    try {
      const response = await axios.post('');
      console.log(response);
    } catch (e) {
      console.log(e, 'error');
    }
  };

  const [formType, setFormType] = useState('');

  const handleOptionSelect = (option) => {
    setFormType(option);
    setAddClick(false);
  };

  return (
    <>
      <div className="dashCalendar">
        <div className="calendar-title">
          <p>Academic Calendar</p>
          {role.includes('University') || role.includes('College') ? (
            <div className="plus-icon" onClick={handleOnClick}>
              <FontAwesomeIcon icon={faPlus} />
            </div>
          ) : null}
        </div>
        <div className="calendarHeader">
          <button type="button" onClick={previousMonth} className="calendarNavButton">
            <ChevronLeftIcon className="calendarIcon" aria-hidden="true" />
          </button>
          <h2 className="calendarTitle">{format(firstDayCurrentMonth, 'MMMM yyyy')}</h2>

          <button onClick={nextMonth} type="button" className="calendarNavButton">
            <ChevronRightIcon className="calendarIcon" aria-hidden="true" />
          </button>
        </div>
        <div className="calendarDays">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thur</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>
        <div className="calendarGrid">
          {days.map((day, dayIdx) => (
            <div
              key={day.toString()}
              className="grid-item"
              style={{
                gridColumnStart: dayIdx === 0 ? getDay(day) + 1 : 'auto', // Dynamically set grid-column-start for the first day
              }}>
              <button
                type="button"
                onClick={() => setSelectedDay(day)}
                className={classNames(
                  isEqual(day, selectedDay) && 'calendarSelected',
                  !isEqual(day, selectedDay) && isToday(day) && 'calendarToday',
                  !isEqual(day, selectedDay) &&
                    !isToday(day) &&
                    isSameMonth(day, firstDayCurrentMonth) &&
                    'calendarCurrentMonth',
                  !isEqual(day, selectedDay) &&
                    !isToday(day) &&
                    !isSameMonth(day, firstDayCurrentMonth) &&
                    'calendarOtherMonth',
                  isEqual(day, selectedDay) && isToday(day) && 'calendar-selected-today',
                  isEqual(day, selectedDay) && !isToday(day) && 'calendar-selected-not-today',
                  !isEqual(day, selectedDay) && 'hover-effect',
                  (isEqual(day, selectedDay) || isToday(day)) && 'calendar-font-bold',
                  'calendarButton',
                )}>
                <time dateTime={format(day, 'yyyy-MM-dd')}>{format(day, 'd')}</time>
              </button>

              <div className="dot-container">
                {meetings.some((meeting) => isSameDay(parseISO(meeting.date), day)) && (
                  <div className="calendarDot">{console.log('meetings')}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {addClick && (
        <>
          {role.includes('University') ? (
            <AddExamForm
              handlePop={handleOnClick}
              handleCalendarSubmit={handleCalendarSubmit}
              // semester={semester}
              // setSemester={setSemester}
              // startdate={startdate}
              // setStartDate={setStartDate}
              // enddate={enddate}
              // setEndDate={setEndDate}
              // dateState={dateState}
              // handleAddDate={handleAddDate}
              // handleUpdateDate={handleUpdateDate}
              // handleDateField={handleDateField}
              // handleAddGap={handleAddGap}
              // gapState={gapState}
              // handleUpdateGap={handleUpdateGap}
              // handleGapField={handleGapField}
            />
          ) : (
            <div className="popMenu">
              <div className="menu-item">
                <p onClick={() => handleOptionSelect('exam')}>Create Exam Schedule</p>
                <p onClick={() => handleOptionSelect('teacher')}>Create Teacher Schedule</p>
              </div>
            </div>
          )}
        </>
      )}

      {formType === 'exam' && (
        <AddExamForm
          handlePop={handleOnClick}
          handleCalendarSubmit={handleCalendarSubmit}
          // semester={semester}
          // setSemester={setSemester}
          // startdate={startdate}
          // setStartDate={setStartDate}
          // enddate={enddate}
          // setEndDate={setEndDate}
          // dateState={dateState}
          // handleAddDate={handleAddDate}
          // handleUpdateDate={handleUpdateDate}
          // handleDateField={handleDateField}
          // handleAddGap={handleAddGap}
          // gapState={gapState}
          // handleUpdateGap={handleUpdateGap}
          // handleGapField={handleGapField}
        />
      )}
      {formType === 'teacher' && (
        <AddTeacherSchedule handleOnClick={handleOnClick} handleTeacherScheduleSubmit={handleTeacherScheduleSubmit} />
      )}
    </>
  );
};
export default DashCalendar;
