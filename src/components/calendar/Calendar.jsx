import '../../styles/Calendar.css';
import '../../styles/common.css';
import axios from 'axios';

import { add, eachDayOfInterval, endOfMonth, format, isSameDay, parse, parseISO, startOfToday } from 'date-fns';

// import normalizeDates from 'date-fns/_lib/normalizeDates';

import { Fragment, useReducer, useState } from 'react';

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

  const handleSubmit = async (event) => {
    event.preventDefault();

    const unavailableDates = dateState.map((date) => date.value); // Only extract the date values
    const gapBetweenExams = gapState.map((gap) => gap.value);

    const scheduledata = {
      semester: semester,
      startDate: startdate,
      endDate: enddate,
      unavailableDates: unavailableDates,
      gapBetweenExams: gapBetweenExams,
    };

    console.log(JSON.stringify(scheduledata));

    try {
      const response = await axios.post(
        'https://localhost:7276/api/Schedule/CreateExamSchedule',
        JSON.stringify(scheduledata),
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
            colStartClasses={colStartClasses}
            setSelectedDay={setSelectedDay}
            selectedDay={selectedDay}
            meetings={meetings}
            selectedDayMeetings={selectedDayMeetings}
          />
        </div>
        {pop && (
          // <div className="form-overlay">
          //   <div className="form-design">
          //     <FormHeader title={'Create Schedule'} handleForm={handlePop} />
          //     <form onSubmit={handleSubmit}>
          //       <CustomFormField
          //         label={'Semester'}
          //         type={'text'}
          //         name={'Semester'}
          //         placeholder={'Enter the semester'}
          //         value={semester}
          //         onChange={(e) => setSemester(e.target.value)}
          //       />
          //       <CustomFormField
          //         label={'Start Date'}
          //         type={'date'}
          //         name={'StartDate'}
          //         value={startdate}
          //         onChange={(e) => setStartDate(e.target.value)}
          //       />
          //       <CustomFormField
          //         label={'End Date'}
          //         type={'date'}
          //         name={'EndDate'}
          //         value={enddate}
          //         onChange={(e) => setEndDate(e.target.value)}
          //       />

          //       {dateState.map((dates) => {
          //         return (
          //           <div key={dates.id} className="course-field">
          //             <CustomFormField
          //               label={'Unavailable Dates'}
          //               name={dates.name}
          //               type={'date'}
          //               value={dates.value}
          //               placeholder={dates.placeholder}
          //               onChange={(e) => handleUpdateDate(e, dates.id)}
          //             />
          //             <button type="button" onClick={handleAddDate}>
          //               Add
          //             </button>
          //           </div>
          //         );
          //       })}
          //       <div className="add-div">
          //         <button onClick={handleDateField} className="add-field-button">
          //           Add Date
          //         </button>
          //       </div>

          //       {gapState.map((gap) => {
          //         return (
          //           <div key={gap.id} className="course-field">
          //             <CustomFormField
          //               label={'Gap Days'}
          //               name={gap.name}
          //               type={'number'}
          //               value={gap.value}
          //               placeholder={gap.placeholder}
          //               onChange={(e) => handleUpdateGap(e, gap.id)}
          //             />
          //             <button type="button" onClick={handleAddGap}>
          //               Add
          //             </button>
          //           </div>
          //         );
          //       })}
          //       <div className="add-div">
          //         <button onClick={handleGapField} className="add-field-button">
          //           Add Gap
          //         </button>
          //       </div>
          //       <ButtonGroup handleClose={handlePop} />
          //     </form>
          //   </div>
          // </div>
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

// export function Meeting({ meeting }) {
//   // let date = parseISO(meeting.date);
//   // let endDateTime = parseISO(meeting.endDatetime);

//   return (
//     <li className="meeting-item">
//       {/* <img src={meeting.imageUrl} alt="" className="flex-none w-10 h-10 rounded-full" /> */}
//       <div className="meeting-details">
//         <p className="meeting-title">{meeting.title}</p>
//         {/* <p className="mt-0.5"> */}
//         {/* <time dateTime={meeting.date}>{format(date, 'h:mm a')}</time> */}
//         {/* <time dateTime={meeting.endDatetime}>{format(endDateTime, 'h:mm a')}</time> */}
//         {/* </p> */}
//       </div>
//       {/* <Menu as="div" className="relative opacity-0 focus-within:opacity-100 group-hover:opacity-100">
//         <div>
//           <Menu.Button className="-m-2 flex items-center rounded-full p-1.5 text-gray-500 hover:text-gray-600">
//             <span className="sr-only">Open options</span>
//             <DotsVerticalIcon className="w-6 h-6" aria-hidden="true" />
//           </Menu.Button>
//         </div>

//         <Transition
//           as={Fragment}
//           enter="transition ease-out duration-100"
//           enterFrom="transform opacity-0 scale-95"
//           enterTo="transform opacity-100 scale-100"
//           leave="transition ease-in duration-75"
//           leaveFrom="transform opacity-100 scale-100"
//           leaveTo="transform opacity-0 scale-95">
//           <Menu.Items className="absolute right-0 z-10 mt-2 origin-top-right bg-white rounded-md shadow-lg w-36 ring-1 ring-black ring-opacity-5 focus:outline-none">
//             <div className="py-1">
//               <Menu.Item>
//                 {({ active }) => (
//                   <a
//                     href="#"
//                     className={classNames(
//                       active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
//                       'block px-4 py-2 text-sm',
//                     )}>
//                     Edit
//                   </a>
//                 )}
//               </Menu.Item>
//               <Menu.Item>
//                 {({ active }) => (
//                   <a
//                     href="#"
//                     className={classNames(
//                       active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
//                       'block px-4 py-2 text-sm',
//                     )}>
//                     Cancel
//                   </a>
//                 )}
//               </Menu.Item>
//             </div>
//           </Menu.Items>
//         </Transition>
//       </Menu> */}
//     </li>
//   );
// }

let colStartClasses = ['', 'col-start-2', 'col-start-3', 'col-start-4', 'col-start-5', 'col-start-6', 'col-start-7'];

export default Calendar;
