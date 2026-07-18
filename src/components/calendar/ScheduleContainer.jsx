import { format } from 'date-fns';
import ScheduleList from './ScheduleList';
import CalendarView from './CalendarView';
const ScheduleContainer = ({
  previousMonth,
  firstDayCurrentMonth,
  nextMonth,
  role,
  handlePop,
  days,
  classNames,
  colStartClasses,
  setSelectedDay,
  selectedDay,
  meetings,
  selectedDayMeetings,
}) => {
  return (
    <>
      <div className="schedule-grid">
        <CalendarView
          previousMonth={previousMonth}
          firstDayCurrentMonth={firstDayCurrentMonth}
          nextMonth={nextMonth}
          role={role}
          handlePop={handlePop}
          days={days}
          classNames={classNames}
          colStartClasses={colStartClasses}
          setSelectedDay={setSelectedDay}
          selectedDay={selectedDay}
          meetings={meetings}
        />
        <section className="schedule-section">
          <h2 className="schedule-header">
            Schedule for <time dateTime={format(selectedDay, 'yyyy-MM-dd')}>{format(selectedDay, 'MMM dd, yyy')}</time>
          </h2>
          <ol className="schedule-list">
            {selectedDayMeetings.length > 0 ? (
              selectedDayMeetings.map((meeting) => <ScheduleList meeting={meeting} key={meeting.id} />)
            ) : (
              <p>No meetings for today.</p>
            )}
          </ol>
        </section>
      </div>
    </>
  );
};
export default ScheduleContainer;
