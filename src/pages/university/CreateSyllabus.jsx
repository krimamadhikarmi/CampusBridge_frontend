import { useReducer, useState } from 'react';
import Navbar from '../../components/Navbar';
import { BooksReducer, SyllabusReducer, initialBook, initialFields } from '../../hooks/reducer';
import SyllabusForm from '../../components/syllabus/SyllabusForm';
import CourseForm from '../../components/syllabus/CourseForm';

const CreateSyllabus = () => {
  const [toogleSyllabusForm, setToogleSyllabusForm] = useState(false);
  const [toogleCourseForm, setToogleCourseForm] = useState(false);

  const [fieldState, dispatch] = useReducer(SyllabusReducer, initialFields);
  const [bookState, bookDispatch] = useReducer(BooksReducer, initialBook);

  const [syllabusId, setSyllabusId] = useState('');
  const [semester, setSemester] = useState('');
  const [electiveno, setElectiveno] = useState('');
  const [courseId, setCourseId] = useState('');

  const [book, setBook] = useState('');
  const [isElective, setIsElective] = useState(false);
  const [coursetitle, setCourseTitle] = useState('');

  // syllabus form functions
  const handleSyllabusForm = () => {
    setToogleSyllabusForm(!toogleSyllabusForm);
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

  const handleSemester = (event) => {
    setSemester(event.target.value);
  };

  const handleAddCourseId = (event) => {
    event.preventDefault();
    console.log('added course');
  };

  const handleElective = (event) => {
    setElectiveno(event.target.value);
  };

  const handleAddField = (event) => {
    event.preventDefault();
    dispatch({ type: 'ADD', name: 'CourseId', placeholder: 'Enter Course Id', value: '' });
  };

  const handleUpdateCourse = (event, id) => {
    const value = event.target.value;
    setCourseId(value);
    dispatch({ type: 'UPDATE', id: id, value: value });
  };

  // course form functions
  const handleCourseSubmit = () => {
    console.log('elective', isElective);
    console.log('book', book);
    console.log('courseid', courseId);
  };

  const handleBookField = (event) => {
    event.preventDefault();
    bookDispatch({ type: 'ADD', name: 'Books', placeholder: 'Enter Books', value: '' });
  };

  const handleCourseForm = () => {
    setToogleCourseForm(!toogleCourseForm);
  };

  const handleUpdateBook = (event, id) => {
    const value = event.target.value;
    setBook(value);
    bookDispatch({ type: 'UPDATE', id: id, value: value });
  };

  const handleAddBook = (event) => {
    event.preventDefault();
    console.log('added book');
  };

  const handleElectiveChange = (event) => {
    setIsElective(event.target.checked);
  };

  const handleCourseId = (event) => {
    setCourseId(event.target.value);
  };

  const handleCourseTitle = (event) => {
    setCourseTitle(event.target.value);
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
          <SyllabusForm
            handleSyllabusForm={handleSyllabusForm}
            handleFormSubmit={handleFormSubmit}
            handleSyllabusid={handleSyllabusid}
            handleSemester={handleSemester}
            handleAddCourseId={handleAddCourseId}
            handleElective={handleElective}
            handleAddField={handleAddField}
            handleUpdateCourse={handleUpdateCourse}
            fieldState={fieldState}
          />
        </div>
      )}

      {toogleCourseForm && (
        <div className="form-overlay">
          <CourseForm
            handleCourseSubmit={handleCourseSubmit}
            handleCourseForm={handleCourseForm}
            handleElectiveChange={handleElectiveChange}
            handleUpdateBook={handleUpdateBook}
            handleAddBook={handleAddBook}
            handleBookField={handleBookField}
            bookState={bookState}
            handleCourseId={handleCourseId}
            handleCourseTitle={handleCourseTitle}
          />
        </div>
      )}
    </>
  );
};

export default CreateSyllabus;
