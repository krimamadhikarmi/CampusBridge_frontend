import { useReducer, useState } from 'react';
import Navbar from '../../components/Navbar';
import CloseButton from '../../components/common/CloseButton';
import CustomFormField from '../../components/customFormField';
import ButtonGroup from '../../components/common/ButtonGroup';
import { BooksReducer, SyllabusReducer, initialBook, initialFields } from '../../hooks/reducer';

const CreateSyllabus = () => {
  const [toogleSyllabusForm, setToogleSyllabusForm] = useState(false);
  const [toogleCourseForm, setToogleCourseForm] = useState(false);
  const [fieldState, dispatch] = useReducer(SyllabusReducer, initialFields);
  const [bookState, bookDispatch] = useReducer(BooksReducer, initialBook);

  const [syllabusId, setSyllabusId] = useState(0);
  const [semester, setSemester] = useState(0);
  const [electiveno, setElectiveno] = useState(0);
  const [courseId, setCourseId] = useState(0);

  const [book, setBook] = useState('');
  const [isElective, setIsElective] = useState(false);

  const handleAddField = (event) => {
    event.preventDefault();
    dispatch({ type: 'ADD', name: 'CourseId', placeholder: 'Enter Course Id', value: '' });
  };

  const handleBookField = (event) => {
    event.preventDefault();
    bookDispatch({ type: 'ADD', name: 'Books', placeholder: 'Enter Books', value: '' });
  };

  const handleSyllabusForm = () => {
    setToogleSyllabusForm(!toogleSyllabusForm);
  };

  const handleCourseForm = () => {
    setToogleCourseForm(!toogleCourseForm);
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

  const handleUpdateCourse = (event, id) => {
    const value = event.target.value;
    setCourseId(value);
    dispatch({ type: 'UPDATE', id: id, value: value });
  };

  const handleUpdateBook = (event, id) => {
    const value = event.target.value;
    setBook(value);
    bookDispatch({ type: 'UPDATE', id: id, value: value });
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

  const handleElectiveChange = (event) => {
    setIsElective(event.target.checked); // Update state based on checkbox
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
            <button className="add-button" onClick={handleCourseForm}>
              Add Courses
            </button>
          </div>
          <div className="no-data-list">No Courses Yet</div>
        </div>
      </div>

      {toogleSyllabusForm && (
        <div className="form-overlay">
          <div className="form-design" onClick={(e) => e.stopPropagation()}>
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
                        onChange={(e) => handleUpdateCourse(e, field.id)}
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

      {toogleCourseForm && (
        <div className="form-overlay">
          <div className="form-design" onClick={(e) => e.stopPropagation()}>
            <div className="syllabus-form-header">
              Create Courses
              <CloseButton toggleBox={handleCourseForm} fill={'#004d4d'} variant={'syllabusform'} />
            </div>
            <div>
              <form>
                <CustomFormField
                  label={'Course Id'}
                  name={'CourseId'}
                  type={'text'}
                  placeholder={'Enter the Course Id'}
                />
                <CustomFormField
                  label={'Course Title'}
                  name={'CourseTitle'}
                  type={'text'}
                  placeholder={'Enter the Course Title'}
                />
                <CustomFormField
                  label={'Course Description'}
                  name={'CourseDescription'}
                  type={'text'}
                  placeholder={'Enter the Course Description'}
                />
                <CustomFormField
                  label={'Course Objectives'}
                  name={'CourseObjective'}
                  type={'text'}
                  placeholder={'Enter the Course Objective'}
                />
                <div className="checkbox-container">
                  <CustomFormField
                    label={'Is Elective?'}
                    name={'isElective'}
                    type={'checkbox'}
                    onChange={handleElectiveChange}
                  />
                </div>

                <CustomFormField
                  label={'Full Marks'}
                  name={'FullMarks'}
                  type={'text'}
                  placeholder={'Enter the Full Marks of Course'}
                />
                <CustomFormField
                  label={'Pass Marks'}
                  name={'PassMarks'}
                  type={'text'}
                  placeholder={'Enter the Pass Marks of Course'}
                />
                <CustomFormField
                  label={'Credit Hour'}
                  name={'CreditHour'}
                  type={'text'}
                  placeholder={'Enter the Course Credit Hours'}
                />
                <CustomFormField
                  label={'Lab Description'}
                  name={'LabDescription'}
                  type={'text'}
                  placeholder={'Enter the Lab Description'}
                />
                {bookState.map((book) => {
                  return (
                    <div key={book.id} className="course-field">
                      <CustomFormField
                        label={'Books'}
                        name={book.name}
                        type={'text'}
                        value={book.value}
                        placeholder={book.placeholder}
                        onChange={(e) => handleUpdateBook(e, book.id)}
                      />
                      <button type="button" onClick={handleAddCourseId}>
                        Add
                      </button>
                    </div>
                  );
                })}
                <div className="add-div">
                  <button onClick={handleBookField} className="add-field-button">
                    Add Book
                  </button>
                </div>
                <ButtonGroup handleClose={handleCourseForm} />
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateSyllabus;
