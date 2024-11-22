import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import PageHeader from '../components/common/PageHeader';
import '../styles/Notices.css';
import NoticeList from '../components/NoticeList';
import '../styles/common.css';
import FormHeader from '../components/common/FormHeader';
import CustomFormField from '../components/customFormField';
import ButtonGroup from '../components/common/ButtonGroup';

const Notices = () => {
  const admin = true;
  const user = 'teacher';
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
  const [showpopup, setShowPopUp] = useState(false);
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setCurrentDate(today);
  }, []);

  const handleArticlePop = () => {
    setShowPopUp(!showpopup);
  };

  const getCheckboxOptions = () => {
    if (user === 'college') {
      return (
        <>
          <label>
            <input type="checkbox" name="DirectedTo" value="Teacher" /> Teacher
          </label>
          <label>
            <input type="checkbox" name="DirectedTo" value="Student" /> Student
          </label>
        </>
      );
    } else if (user === 'club-head') {
      return (
        <>
          <label>
            <input type="checkbox" name="DirectedTo" value="Club Member" /> Club Member
          </label>
          <label>
            <input type="checkbox" name="DirectedTo" value="College" /> College
          </label>
        </>
      );
    } else if (user === 'university') {
      return (
        <>
          <label>
            <input type="checkbox" name="DirectedTo" value="College" /> College
          </label>
          <label>
            <input type="checkbox" name="DirectedTo" value="Student" /> Student
          </label>
        </>
      );
    }
    return (
      <>
        <label>
          <input type="checkbox" name="DirectedTo" value="College" /> College
        </label>
        <label>
          <input type="checkbox" name="DirectedTo" value="Student" /> Student
        </label>
      </>
    ); 
  };
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
          <button
            onClick={() => setSelectCategory('University')}
            className={selectCategory === 'University' ? 'active' : ''}>
            University
          </button>
        </div>
        {admin && (
          <div>
            <button className="add-notice-button" onClick={handleArticlePop}>
              Add Notice
            </button>
          </div>
        )}
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
      {showpopup && (
        <div className="form-overlay">
          <div className="form-design">
            <FormHeader handleForm={handleArticlePop} title={'Create Notice'} />
            <form>
              <CustomFormField
                name={'NoticeId'}
                label={'Notice Id'}
                placeholder={'Enter the Notice Id'}
                type={'text'}
              />
              <CustomFormField name={'Title'} label={'Title'} placeholder={'Enter the title of notice'} type={'text'} />
              <CustomFormField
                name={'Description'}
                label={'Description'}
                placeholder={'Enter the Notice Description'}
                type={'text'}
              />
              <div className="check-group">
                <p>Who is your notice directed to?</p>
                <div className="check-group-item">{getCheckboxOptions()}</div>
              </div>

              <CustomFormField label={'Date'} name={'date'} type={'date'} value={currentDate} />

              <ButtonGroup handleClose={handleArticlePop} />
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Notices;
