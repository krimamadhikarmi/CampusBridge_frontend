import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import { format, getDay, isEqual, isSameDay, isSameMonth, isToday, parseISO } from 'date-fns';
import ScheduleList, { Meeting } from './ScheduleList';
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
        <div className="calendar-section">
          <div className="header">
            <button type="button" onClick={previousMonth} className="nav-button">
              <ChevronLeftIcon className="icon" aria-hidden="true" />
            </button>
            <h2>{format(firstDayCurrentMonth, 'MMMM yyyy')}</h2>

            <button onClick={nextMonth} type="button" className="nav-button">
              <ChevronRightIcon className="icon" aria-hidden="true" />
            </button>

            {role.includes('University') || role.includes('College') ? (
              <button className="create-schedule-btn" onClick={handlePop}>
                Create Schedule
              </button>
            ) : null}
          </div>
          <div className="grid-container">
            <div>S</div>
            <div>M</div>
            <div>T</div>
            <div>W</div>
            <div>T</div>
            <div>F</div>
            <div>S</div>
          </div>
          <div className="grid-container-sm">
            {days.map((day, dayIdx) => (
              <div
                key={day.toString()}
                className={classNames(dayIdx === 0 && colStartClasses[getDay(day)], 'grid-item')}>
                <button
                  type="button"
                  onClick={() => setSelectedDay(day)}
                  className={classNames(
                    isEqual(day, selectedDay) && 'selected-day',
                    !isEqual(day, selectedDay) && isToday(day) && 'today',
                    !isEqual(day, selectedDay) &&
                      !isToday(day) &&
                      isSameMonth(day, firstDayCurrentMonth) &&
                      'current-month',
                    !isEqual(day, selectedDay) &&
                      !isToday(day) &&
                      !isSameMonth(day, firstDayCurrentMonth) &&
                      'other-month',
                    isEqual(day, selectedDay) && isToday(day) && 'selected-today',
                    isEqual(day, selectedDay) && !isToday(day) && 'selected-not-today',
                    !isEqual(day, selectedDay) && 'hover-effect',
                    (isEqual(day, selectedDay) || isToday(day)) && 'font-bold',
                    'grid-item-button',
                  )}>
                  <time dateTime={format(day, 'yyyy-MM-dd')}>{format(day, 'd')}</time>
                </button>

                <div className="dot-container">
                  {meetings.some((meeting) => isSameDay(parseISO(meeting.date), day)) && <div className="dot"></div>}
                </div>
              </div>
            ))}
          </div>
        </div>
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
