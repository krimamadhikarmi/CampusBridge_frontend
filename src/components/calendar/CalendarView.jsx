import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import { format, getDay, isEqual, isSameDay, isSameMonth, isToday, parseISO } from 'date-fns';
// import { useState } from 'react';
const CalendarView = ({
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
}) => {
  return (
    <>
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
        {/* <div className="grid-container-sm"> */}
          {/* {days.map((day, dayIdx) => (
            <div key={day.toString()} className={classNames(dayIdx === 0 && colStartClasses[getDay(day)], 'grid-item')}>
              {console.log(getDay(day))}
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
          ))} */}
          {/* <div className="grid-container-sm">
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
            ))} */}
          <div className="grid-container-sm">
            {days.map((day, dayIdx) => {
              const isFirstDay = dayIdx === 0;
              const gridColumnStart = isFirstDay ? getDay(firstDayCurrentMonth) + 1 : 'auto'; // Calculate the start day

              return (
                <div
                  key={day.toString()}
                  className="grid-item"
                  style={{
                    gridColumnStart: gridColumnStart, // Apply calculated grid-column-start
                  }}>
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
              );
            })}
          </div>
        </div>
     
    </>
  );
};
export default CalendarView;
