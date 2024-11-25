import { useReducer, useState } from 'react';
import Navbar from '../../components/Navbar';
import {
  BooksReducer,
  SyllabusReducer,
  UnitsReducer,
  initialBook,
  initialFields,
  initialUnits,
} from '../../hooks/reducer';
import SyllabusForm from '../../components/syllabus/SyllabusForm';
import CourseForm from '../../components/syllabus/CourseForm';
import { useNavigate } from 'react-router-dom';
import SyllabusTable from '../../components/syllabus/SyllabusTable';
import CoursesTable from '../../components/syllabus/CoursesTable';
import '../../styles/common.css';
const CreateSyllabus = () => {
  const [toogleSyllabusForm, setToogleSyllabusForm] = useState(false);
  const [toogleCourseForm, setToogleCourseForm] = useState(false);
  const navigate = useNavigate();

  const [fieldState, dispatch] = useReducer(SyllabusReducer, initialFields);
  const [bookState, bookDispatch] = useReducer(BooksReducer, initialBook);
  const [unitState, unitDispatch] = useReducer(UnitsReducer, initialUnits);

  const [syllabusId, setSyllabusId] = useState('');
  const [semester, setSemester] = useState('');
  const [electiveno, setElectiveno] = useState('');
  const [courseId, setCourseId] = useState('');

  const [book, setBook] = useState('');
  const [isElective, setIsElective] = useState(false);
  const [coursetitle, setCourseTitle] = useState('');

  const [unitId, setUnitId] = useState('');
  const [title, setTitle] = useState('');
  const [creditHour, setCreditHour] = useState('');

  const syllabus = true;
  const course = true;

  const handleViewClick = () => {
    navigate('/syllabus');
  };

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

  const handleAddField = (event) => {
    event.preventDefault();
    dispatch({ type: 'ADD', name: 'CourseId', placeholder: 'Enter Course Id', value: '' });
  };

  const handleUpdateCourse = (event, id) => {
    const value = event.target.value;
    dispatch({ type: 'UPDATE', id: id, value: value });
  };

  //setting the value entered in the input field

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

  // course form functions

  const handleCourseForm = () => {
    setToogleCourseForm(!toogleCourseForm);
  };

  const handleCourseSubmit = () => {
    console.log('elective', isElective);
    console.log('book', book);
    console.log('courseid', courseId);
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

  // handling book field
  const handleBookField = (event) => {
    event.preventDefault();
    bookDispatch({ type: 'ADD', name: 'Books', placeholder: 'Enter Books', value: '' });
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

  // handling unit form

  const handleAddMoreUnit = (event) => {
    event.preventDefault();
    console.log('Submitting units:', unitState);
    unitDispatch({
      type: 'ADD_UNIT',
      unitId,
      title,
      creditHour,
    });
  };

  const handleUpdateUnit = (unitId, field, value, event) => {
    setUnitId(value);
    setCreditHour(value);
    setTitle(value);
    unitDispatch({
      type: 'UPDATE_UNIT',
      id: unitId,
      field: field,
      value: value,
    });
  };

  const handleUnitAdd = (event) => {
    event.preventDefault();
    console.log('added unit');
    console.log('unitid', unitId);
    console.log('tile', title);
    console.log('hour', creditHour);
  };

  //handling subunit
  // Add a new subunit to a specific unit
  const handleAddSubUnit = (unitId, event) => {
    console.log("unitid",unitId)
    unitDispatch({ type: 'ADD_SUB_UNIT', unitId });
  };

  // Update a subunit's title
  const handleUpdateSubUnit = (unitId, subUnitId, value) => {
    unitDispatch({
      type: 'UPDATE_SUB_UNIT',
      unitId,
      id: subUnitId,
      value,
    });
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
          {syllabus ? (
            <SyllabusTable handleViewClick={handleViewClick} />
          ) : (
            <div className="no-data-list">No Syllabus Yet</div>
          )}
        </div>
        <hr className="divider" />
        <div className="display-div">
          <h2>Courses</h2>
          <div className="button-container">
            <button className="add-button" onClick={handleCourseForm}>
              Add Courses
            </button>
          </div>
          {course ? <CoursesTable /> : <div className="no-data-list">No Courses Yet</div>}
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
            handleAddMoreUnit={handleAddMoreUnit}
            handleUpdateUnit={handleUpdateUnit}
            handleUnitAdd={handleUnitAdd}
            unitState={unitState}
            handleAddSubUnit={handleAddSubUnit}
            handleUpdateSubUnit={handleUpdateSubUnit}
          />
        </div>
      )}
    </>
  );
};

export default CreateSyllabus;
