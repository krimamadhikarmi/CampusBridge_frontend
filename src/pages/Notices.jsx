import { useState } from 'react';
import Navbar from '../components/Navbar';
import PageHeader from '../components/PageHeader';
import '../styles/Notices.css';

const Notices = () => {
  const noticesData = [
    {
      id: 1,
      title: 'Class Rescheduled',
      content: 'The CS101 class has been rescheduled to 10:00 AM on 01/01/2023.',
      category: 'College',
      date: '2023-01-01',
    },
    {
      id: 2,
      title: 'BSc Exam Schedule',
      content: 'Final exam schedule for the BSc program has been released.',
      category: 'University',
      date: '2081-08-08',
    },
    {
      id: 3,
      title: 'Class Cancelled',
      content: 'The Wednesday class for TU101 has been cancelled.',
      category: 'University',
      date: '2081-08-15',
    },
  ];
  const [selectCategory, setSelectCategory] = useState('All');
  const filterData =
    selectCategory === 'All' ? noticesData : noticesData.filter((notice) => notice.category === selectCategory);
  return (
    <>
      <Navbar />
      <PageHeader pageTitle={'Notices'} />
      <div className="notice-box">
        <div className="choice-box">
          <button onClick={() => setSelectCategory('All')}>All</button>
          <button onClick={() => setSelectCategory('College')}>College</button>
          <button onClick={() => setSelectCategory('University')}>University</button>
        </div>
        <div className="notice-list">
          {filterData.map((notice, index) => (
            <div key={index} className="notice-item">
              <div className="notice-number">{index + 1}</div>
              <div className="notice-content">
                <p className="notice-title">{notice.title}</p>
                <p className="notice-data">{notice.content}</p>
                <div className="notice-bottom">
                  <p className="notice-category">{notice.category} </p>
                  <p className="notice-date">Date:{notice.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Notices;
