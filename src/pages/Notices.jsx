import { useState } from 'react';
import Navbar from '../components/Navbar';
import PageHeader from '../components/PageHeader';
import '../styles/Notices.css';
import NoticeList from '../components/NoticeList';

const Notices = () => {
  //for now i have created fake json data to test purpose
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
          <button onClick={() => setSelectCategory('All')} className={selectCategory === 'All' ? 'active' : ''}>
            All
          </button>
          <button onClick={() => setSelectCategory('College')} className={selectCategory === 'College' ? 'active' : ''}>
            College
          </button>
          <button onClick={() => setSelectCategory('University')} className={selectCategory === 'University' ? 'active' : ''}>University</button>
        </div>
        <div className="notice-list">
          {filterData.map((notice, index) => (
            <div key={index} className="notice-item">
              <NoticeList
                index={index}
                title={notice.title}
                content={notice.content}
                category={notice.category}
                date={notice.date}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Notices;
