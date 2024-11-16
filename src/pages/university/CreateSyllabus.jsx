import { useReducer, useState } from 'react';
import Navbar from '../../components/Navbar';
import CloseButton from '../../components/common/CloseButton';
import CustomFormField from '../../components/customFormField';
import ButtonGroup from '../../components/common/ButtonGroup';
import { SyllabusReducer, initialFields } from '../../hooks/reducer';

const CreateSyllabus = () => {
  const [toogleForm, setToogleForm] = useState(false);
  const [fieldState, dispatch] = useReducer(SyllabusReducer, initialFields);
  const [syllabusId, setSyllabusId] = useState(0);
  const [semester, setSemester] = useState(0);
  const [electiveno, setElectiveno] = useState(0);
  const [courseId, setCourseId] = useState(0);
  const handleAddField = (event) => {
    event.preventDefault();
    dispatch({ type: 'ADD', name: 'CourseId', placeholder: 'Enter Course Id', value: '' });
  };
  const handleSyllabusForm = () => {
    setToogleForm(!toogleForm);
  };

  const handleFormSubmit = () => {
    console.log('syllabus', syllabusId);
    console.log('semester', semester);
    console.log('elective', electiveno);
    console.log('courseid', courseId);
    handleSyllabusForm();
  };

  const handleSyllabusid = (event) => {
    setSyllabusId(event.target.value);
  };
  const handleCourseId = (event, id) => {
    const value = event.target.value;
    setCourseId(value);
    dispatch({ type: 'UPDATE', id: id, value: value });
  };

  const handleSemester = (event) => {
    setSemester(event.target.value);
  };
  const handleElective = (event) => {
    setElectiveno(event.target.value);
  };
  const handleAddCourseId = (event) => {
    event.preventDefault();
    console.log('added course');
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
              <form onSubmit={handleFormSubmit}>
                <CustomFormField
                  label={'Syllabus Id'}
                  name={'SyllabusId'}
                  type={'text'}
                  placeholder={'Enter the Syllabus Id'}
                  onChange={handleSyllabusid}
                />
                <CustomFormField
                  label={'Semester'}
                  name={'Semester'}
                  type={'text'}
                  placeholder={'Enter the semester'}
                  onChange={handleSemester}
                />

                {fieldState.map((field) => {
                  return (
                    <div key={field.id} className="course-field">
                      <CustomFormField
                        label={'Course Id'}
                        name={field.name}
                        type={'text'}
                        value={field.value}
                        placeholder={field.placeholder}
                        onChange={(e) => handleCourseId(e, field.id)}
                      />
                      <button type="button" onClick={handleAddCourseId}>
                        Add
                      </button>
                    </div>
                  );
                })}
                <div className="add-div">
                  <button onClick={handleAddField} className="add-field-button">
                    Add Courses
                  </button>
                </div>

                <CustomFormField
                  label={'Number of Electives'}
                  name={'AllowedElectiveNo'}
                  type={'number'}
                  placeholder={'Enter the number of electives'}
                  onChange={handleElective}
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
