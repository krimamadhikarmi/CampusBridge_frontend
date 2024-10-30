import { useState } from 'react';
import Navbar from '../components/Navbar';
import PageHeader from '../components/PageHeader';
import '../styles/Syllabus.css';

const Syllabus = () => {
  const [showElectives, setShowElectives] = useState(false);
  const [selectSubject, setSelectSubject] = useState('Advanced Java Programming');

  const toggleElective = () => {
    setShowElectives(!showElectives);
  };

  return (
    <>
      <Navbar />
      <PageHeader pageTitle={'Syllabus'} />
      <div className="syllabus-box">
        <div className="syllabus-side-bar">
          <p onClick={() => setSelectSubject('Advanced Java Programming')}>Advanced Java Programming</p>
          <p onClick={() => setSelectSubject('Data WareHousing and Data Mining')}>Data WareHousing and Data Mining</p>
          <p onClick={() => setSelectSubject('Principle of Management')}>Principle of Management</p>
          <p onClick={() => setSelectSubject('Project Work')}>Project Work</p>
          <p onClick={toggleElective} style={{ cursor: 'pointer', fontWeight: 'bold', color: '#fffff0' }}>
            Electives {showElectives ? '▲' : '▼'}
          </p>
          {showElectives && (
            <div className="elective-options">
              <p onClick={() => setSelectSubject('Software Project Management')}>Software Project Management</p>
              <p onClick={() => setSelectSubject('Network Security')}>Network Security</p>
              <p onClick={() => setSelectSubject('Information Retrieval')}>Information Retrieval</p>
            </div>
          )}
        </div>
        <div className="syllabus-content">
          {selectSubject && (
            <div>
              <h2>{selectSubject}</h2>
              <p>
                {selectSubject === 'Advanced Java Programming' && <p>This is Java</p>}
                {selectSubject === 'Principle of Management' && <p>This is Project Management</p>}
                {selectSubject === 'Data WareHousing and Data Mining' && <p>This is Data Mining</p>}
                {selectSubject === 'Project Work' && <p>This is Project Work</p>}
                {selectSubject === 'Software Project Management' && <p>This is SPM</p>}
                {selectSubject === 'Network Security' && <p>This is Network Security</p>}
                {selectSubject === 'Information Retrieval' && <p>This is Information Retrival</p>}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Syllabus;
