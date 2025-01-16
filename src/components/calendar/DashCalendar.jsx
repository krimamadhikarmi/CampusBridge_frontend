import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import { format, getDay, isEqual, isSameDay, isSameMonth, isToday, parseISO } from 'date-fns';
import ScheduleList from './ScheduleList';
// import { useState } from 'react';
const DashCalendar = ({
  previousMonth,
  firstDayCurrentMonth,
  nextMonth,
  days,
  classNames,
  colStartClasses,
  setSelectedDay,
  selectedDay,
  meetings,
  selectedDayMeetings,
  // handleDateClick,
}) => {
  return (
    <>
      <div className="dashCalendar">
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
          <div>S</div>
          <div>M</div>
          <div>T</div>
          <div>W</div>
          <div>T</div>
          <div>F</div>
          <div>S</div>
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

      {/* </div> */}
    </>
  );
};
export default DashCalendar;
