import { useState } from 'react';
import Navbar from '../../components/Navbar';
import CloseButton from '../../components/CloseButton';

const CreateSyllabus = () => {
  const [toogleForm, setToogleForm] = useState(false);

  const handleSyllabusForm = () => {
    setToogleForm(!toogleForm);
  };
  return (
    <>
      <Navbar />
      <div className="syllabus-body">
        <div className="display-div">
          <h2> Syllabus</h2>
          <div className="button-container">
            <button className="add-button" onClick={handleSyllabusForm}>
              Add Syllabus
            </button>
          </div>
          <div className="no-data-list">No Syllabus Yet</div>
        </div>
        <hr className="divider" />
        <div className="display-div">
          <h2>Courses</h2>
          <div className="button-container">
            <button className="add-button">Add Courses</button>
          </div>
          <div className="no-data-list">No Courses Yet</div>
        </div>
      </div>
      {toogleForm && (
        <div className="form-overlay">
          <div className="syllabus-form" onClick={(e) => e.stopPropagation()}>
            <div className="syllabus-form-header">
              Create Syllabus
              <CloseButton toggleBox={handleSyllabusForm} fill={'#004d4d'} variant={'syllabusform'} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateSyllabus;
