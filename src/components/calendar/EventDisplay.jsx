import ScheduleList from "./ScheduleList";
import { format } from "date-fns";
const EventDisplay = ({ selectedDay, selectedDayMeetings }) => {
  return (
    <div className="box box2">
      <div className="eventDisplay">
        <section className="event-section">
          <h2 className="event-header">
            Schedule for <time dateTime={format(selectedDay, 'yyyy-MM-dd')}>{format(selectedDay, 'MMM dd, yyy')}</time>
          </h2>
          <ol className="event-list">
            {selectedDayMeetings.length > 0 ? (
              selectedDayMeetings.map((meeting) => <ScheduleList meeting={meeting} key={meeting.id} />)
            ) : (
              <p>No meetings for today.</p>
            )}
          </ol>
        </section>
      </div>
    </div>
  );
};
export default EventDisplay;
