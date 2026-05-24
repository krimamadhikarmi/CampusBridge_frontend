import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import { format, getDay, isEqual, isSameDay, isSameMonth, isToday, parseISO } from 'date-fns';
import { useToken } from '../../context/TokenContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import AddExamForm from './AddExamForm';
import TeacherConstraintsForm from './TeacherSchedule';
import api from '../../api/axios';

const DashCalendar = ({
  previousMonth,
  firstDayCurrentMonth,
  nextMonth,
  days,
  classNames,
  setSelectedDay,
  selectedDay,
  meetings,
}) => {
  const { role } = useToken();

  const [addClick, setAddClick] = useState(false);

  const handleOnClick = () => {
    setAddClick(!addClick);
  };

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
      const response = await api.post('/Schedule/CreateExamSchedule', JSON.stringify(completeScheduleData));
      console.log('schedule', response.data);
    } catch (e) {
      console.log(e);
    }
  };

  const handleConstraintsSubmit = (data) => {
    console.log('Constraints Submitted:', data);
    // Here you can call your API with the submitted data
    // e.g., axios.post('/api/teacherconstraints', data)
    // After submission, hide the form if desired:
    setAddClick(!addClick);
  };

  // const handleTeacherScheduleSubmit = async (teacherSchedule) => {
  //   const teacherFormData = {
  //     semester: teacherSchedule.semester,
  //     startDate: new Date(teacherSchedule.startDate).toISOString(),
  //     endDate: new Date(teacherSchedule.endDate).toISOString(),
  //     slotsPerDay: teacherSchedule.slotsPerDay,
  //     breakMinutes: teacherSchedule.breakMinutes,
  //     teachers: teacherSchedule.teachers.map((teacher) => ({
  //       id: teacher.id,
  //       name: teacher.name,
  //       availability: teacher.availability,
  //     })),
  //     holidays: teacherSchedule.holidays,
  //   };
  //   console.log(JSON.stringify(teacherFormData));
  //   try {
  //     const response = await axios.post('');
  //     console.log(response);
  //   } catch (e) {
  //     console.log(e, 'error');
  //   }
  // };

  const [teacherScheduleData, setTeacherScheduleData] = useState([]);

  const fetchCourseTeacher = async () => {
    try {
      const response = await api.get('/Teacher/GetCourseTeacher');
      const transformedData = response.data.map((course, index) => ({
        id: index + 1,
        courseName: course.courseTitle,
        teacherId: course.teacherId,
      }));

      setTeacherScheduleData(transformedData);
      console.log(teacherScheduleData, 'response');
    } catch (error) {
      console.error('Error fetching course-teacher data:', error);
    }
  };
  useEffect(() => {
    fetchCourseTeacher();
  }, []);

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
            <AddExamForm handlePop={handleOnClick} handleCalendarSubmit={handleCalendarSubmit} />
          ) : (
            // <AddTeacherSchedule
            //   handleOnClick={handleOnClick}
            //   handleTeacherScheduleSubmit={handleTeacherScheduleSubmit}
            // />
            <TeacherConstraintsForm
              onSubmit={handleConstraintsSubmit}
              handleOnClick={handleOnClick}
              teacherScheduleData={teacherScheduleData}
            />
          )}
        </>
      )}
    </>
  );
};
export default DashCalendar;
