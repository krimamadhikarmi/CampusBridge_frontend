import { useState } from 'react';
import Navbar from '../../components/Navbar';
import CloseButton from '../../components/common/CloseButton';
import CustomFormField from '../../components/customFormField';
import ButtonGroup from '../../components/common/ButtonGroup';

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
            <div>
              <form>
                <CustomFormField
                  label={'Syllabus Id'}
                  name={'SyllabusId'}
                  type={'text'}
                  placeholder={'Enter the Syllabus Id'}
                />
                <CustomFormField
                  label={'Semester'}
                  name={'Semester'}
                  type={'text'}
                  placeholder={'Enter the semester'}
                />
                <CustomFormField
                  label={'Number of Electives'}
                  name={'AllowedElectiveNo'}
                  type={'number'}
                  placeholder={'Enter the number of electives'}
                />

                <ButtonGroup handleClose={handleSyllabusForm} />
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateSyllabus;
