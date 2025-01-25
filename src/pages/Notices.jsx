import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import PageHeader from '../components/common/PageHeader';
import '../styles/Notices.css';
import NoticeList from '../components/NoticeList';
import '../styles/common.css';
import AddNotice from '../components/notice/AddNotice';
import SelectNotice from '../components/notice/SelectNotice';
import { useToken } from '../context/TokenContext';
import axios from 'axios';

const Notices = () => {
  const { role, id } = useToken();

  //for now i have created fake json data to test purpose
  // const NoticesData = [
  //   {
  //     id: 1,
  //     title: 'Class Rescheduled',
  //     content: 'The CS101 class has been rescheduled to 10:00 AM on 01/01/2023.',
  //     category: 'College',
  //     date: '2023-01-01',
  //   },
  //   {
  //     id: 2,
  //     title: 'BSc Exam Schedule',
  //     content: 'Final exam schedule for the BSc program has been released.',
  //     category: 'University',
  //     date: '2081-08-08',
  //   },
  //   {
  //     id: 3,
  //     title: 'Class Cancelled',
  //     content: 'The Wednesday class for TU101 has been cancelled.',
  //     category: 'University',
  //     date: '2081-08-15',
  //   },
  //   {
  //     id: 3,
  //     title: 'Club Meeting Cancelled',
  //     content: 'The Wednesday Club Meeting for Cl101 has been cancelled.',
  //     category: 'Club',
  //     date: '2081-08-15',
  //   },
  // ];
  const [selectCategory, setSelectCategory] = useState('All');
  const [showpopup, setShowPopUp] = useState(false);
  const [currentDate, setCurrentDate] = useState('');
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    // Set today's date in the correct format
    const today = new Date().toISOString().split('T')[0];
    setCurrentDate(today);

    const fetchNotice = async () => {
      try {
        const response = await axios.get('https://localhost:7276/api/Notice/GetNotice');
        console.log('Response Data:', response.data);
        setNotices(response.data);
      } catch (e) {
        console.log('Error:', e);
      }
    };
    fetchNotice();
  }, []);

  const handleArticlePop = () => {
    setShowPopUp(!showpopup);
  };

  const handleNoticeSubmit = async (formData, event) => {
    // event.preventDefault()
    console.log(formData)
    const noticeData = {
      noticeId: formData.noticeId,
      title: formData.title,
      description: formData.description,
      directedTo: formData.directedTo,
      datePosted: formData.datePosted,
      creatorId: id,
    };
    console.log(JSON.stringify(noticeData));

    try {
      const response = await axios.post('https://localhost:7276/api/Notice/CreateNotice', JSON.stringify(noticeData), {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const newNotice = response.data;

      // Update the notices list with the newly added notice
      setNotices((prevNotices) => [newNotice, ...prevNotices]);
      setShowPopUp(false); // Close the popup after submission
      console.log('Resonse', response.data);
      const newNotice = response.data;
      // Update the notices list with the newly added notice
      setNotices((prevNotices) => [newNotice, ...prevNotices]);
      setShowPopUp(false); // Close the popup after submission
      //fetchNotice();
    } catch (e) {
      console.log(e);
    }
  };

  const getCheckboxOptions = (handleCheckboxChange) => {
    if (role.includes('College')) {
      return (
        <>
          <label>
            <input type="checkbox" name="directedTo" value="Teacher" onChange={handleCheckboxChange} /> Teacher
          </label>
          <label>
            <input type="checkbox" name="directedTo" value="Student" onChange={handleCheckboxChange} /> Student
          </label>
        </>
      );
    } else if (role.includes('ClubHead')) {
      return (
        <>
          <label>
            <input type="checkbox" name="directedTo" value="Club Member" onChange={handleCheckboxChange} /> Club Member
          </label>
          <label>
            <input type="checkbox" name="directedTo" value="College" onChange={handleCheckboxChange} /> College
          </label>
        </>
      );
    } else if (role.includes('University')) {
      return (
        <>
          <label>
            <input type="checkbox" name="directedTo" value="College" onChange={handleCheckboxChange} /> College
          </label>
          <label>
            <input type="checkbox" name="directedTo" value="Student" onChange={handleCheckboxChange} /> Student
          </label>
        </>
      );
    }
    return (
      <>
        <label>
          <input type="checkbox" name="directedTo" value="College" /> College
        </label>
        <label>
          <input type="checkbox" name="directedTo" value="Student" /> Student
        </label>
      </>
    );
  };
  const filterData = selectCategory === 'All' ? notices : notices.filter((notice) => notice.creator === selectCategory);
  return (
    <>
      {console.log(notices)}
      <Navbar />
      <PageHeader pageTitle={'Notices'} />
      <div className="notice-box">
        <SelectNotice selectCategory={selectCategory} setSelectCategory={setSelectCategory} />
        {role.includes('College') || role.includes('University') || role.includes('ClubHead') ? (
          <div>
            <button className="add-notice-button" onClick={handleArticlePop}>
              Add Notice
            </button>
          </div>
        ) : null}
        <div className="notice-list">
          {filterData.map((notice, index) => (
            <div key={index} className="notice-item">
              <NoticeList
                index={index}
                id={notice.noticeId}
                title={notice.title}
                content={notice.description}
                category={notice.creator}
                date={notice.datePosted}
                getCheckboxOptions={getCheckboxOptions}
                role={role}
              />
            </div>
          ))}
        </div>
      </div>
      {showpopup && (
        <AddNotice
          handleArticlePop={handleArticlePop}
          currentDate={currentDate}
          getCheckboxOptions={getCheckboxOptions}
          handleSubmit={handleNoticeSubmit}
        />
      )}
    </>
  );
};

export default Notices;
