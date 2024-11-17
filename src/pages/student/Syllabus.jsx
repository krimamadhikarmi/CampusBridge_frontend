import { useState } from 'react';
import Navbar from '../../components/Navbar';
import PageHeader from '../../components/common/PageHeader';
import '../../styles/Syllabus.css';

const Syllabus = () => {
  const [showElectives, setShowElectives] = useState(false);
  const [selectSubject, setSelectSubject] = useState('Advanced Java Programming');
  const [activeTab, setActiveTab] = useState('Advanced Java Programming');

  const toggleElective = () => {
    setShowElectives(!showElectives);
  };

  const handleActiveTab = (subject) => {
    setSelectSubject(subject);
    setActiveTab(subject);
  };

  return (
    <>
      <Navbar />
      <PageHeader pageTitle={'Syllabus'} />
      <div className="syllabus-box">
        <div className="syllabus-side-bar">
          <p
            className={activeTab === 'Advanced Java Programming' ? 'active' : ''}
            onClick={() => handleActiveTab('Advanced Java Programming')}>
            Advanced Java Programming
          </p>
          <p
            className={activeTab === 'Data WareHousing and Data Mining' ? 'active' : ''}
            onClick={() => handleActiveTab('Data WareHousing and Data Mining')}>
            Data WareHousing and Data Mining
          </p>
          <p
            className={activeTab === 'Principle of Management' ? 'active' : ''}
            onClick={() => handleActiveTab('Principle of Management')}>
            Principle of Management
          </p>
          <p className={activeTab === 'Project Work' ? 'active' : ''} onClick={() => handleActiveTab('Project Work')}>
            Project Work
          </p>
          <p onClick={toggleElective} style={{ cursor: 'pointer', fontWeight: 'bold', color: '#fffff0' }}>
            Electives {showElectives ? '▲' : '▼'}
          </p>
          {showElectives && (
            <div className="elective-options">
              <p
                className={activeTab === 'Software Project Management' ? 'active' : ''}
                onClick={() => handleActiveTab('Software Project Management')}>
                Software Project Management
              </p>
              <p
                className={activeTab === 'Network Security' ? 'active' : ''}
                onClick={() => handleActiveTab('Network Security')}>
                Network Security
              </p>
              <p
                className={activeTab === 'Information Retrieval' ? 'active' : ''}
                onClick={() => handleActiveTab('Information Retrieval')}>
                Information Retrieval
              </p>
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
