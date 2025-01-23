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
import axios from 'axios';

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

  const handleFormSubmit = async (syllabusData, event) => {
    event.preventDefault();
    const completeSyllabusData = {
      syllabusId: syllabusData.syllabusId,
      courseId: syllabusData.courseId,
      semester: syllabusData.semester,
      allowedElectiveNo: syllabusData.allowedElectiveNo,
    };
    console.log('Before api call:', JSON.stringify(completeSyllabusData));

    try {
      const response = await axios.post(
        'https://localhost:7276/api/Syllabus/CreateSyllabus',
        JSON.stringify(completeSyllabusData),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      console.log('Response data:', response.data);
    } catch (e) {
      console.log(e);
    }

    handleSyllabusForm();
  };

  // course form functions

  const handleCourseForm = () => {
    setToogleCourseForm(!toogleCourseForm);
  };

  const handleCourseSubmit = async (courseData) => {
    if (courseData.isElective === '') {
      courseData.isElective = false;
    }

    console.log(courseData.courseId, 'id');
    console.log(courseData.courseDescription, 'des');
    console.log(courseData.courseObjective, 'ob');
    console.log(courseData.courseTitle, 'ti');
    console.log(courseData.FullMarks, 'fm');
    const completeCourseData = {
      courseId: courseData.courseId,
      courseTitle: courseData.courseTitle,
      courseDescription: courseData.courseDescription,
      courseObjective: courseData.courseObjective,
      isElective: courseData.isElective,
      fullMarks: courseData.fullMarks,
      passMarks: courseData.passMarks,
      creditHour: courseData.creditHour,
      labDescription: courseData.labDescription,
      books: courseData.books,
      unitsDTO: courseData.unitsDTO,
    };

    console.log(JSON.stringify(completeCourseData), 'hiiii');

    try {
      const response = await axios.post(
        'https://localhost:7276/api/Syllabus/CreateCourse',
        JSON.stringify(completeCourseData),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      console.log('Response data:', response.data);
    } catch (e) {
      console.log(e, 'error');
    }
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

  // handling unit form

  const handleUnitAdd = (event) => {
    event.preventDefault();
    console.log('added unit');
    console.log('unitid', unitId);
    console.log('tile', title);
    console.log('hour', creditHour);
  };

  //handling subunit
  // Add a new subunit to a specific unit
  const handleAddSubUnit = (unitId, e) => {
    e.preventDefault();
    // e.stopPropagation();
    unitDispatch({ type: 'ADD_SUB_UNIT', unitId });
  };

  const handleSub = (event) => {
    event.preventDefault();
    event.stopPropagation(); // Prevent the event from propagating to the parent div
    console.log('Added subunit');
  };

  const [subUnits, setSubUnits] = useState([]);

  // Update a subunit's title

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
          <SyllabusForm handleSyllabusForm={handleSyllabusForm} handleSyllabusSubmit={handleFormSubmit} />
          {/* <FormData /> */}
        </div>
      )}

      {toogleCourseForm && (
        <div className="form-overlay">
          <CourseForm
            handleCourseSubmit={handleCourseSubmit}
            handleCourseForm={handleCourseForm}
            // handleElectiveChange={handleElectiveChange}
            // // handleUpdateBook={handleUpdateBook}
            // // handleAddBook={handleAddBook}
            // // handleBookField={handleBookField}
            // bookState={bookState}
            // handleCourseId={handleCourseId}
            // handleCourseTitle={handleCourseTitle}
            // // handleAddMoreUnit={handleAddMoreUnit}
            // // handleUpdateUnit={handleUpdateUnit}
            // handleUnitAdd={handleUnitAdd}
            // unitState={unitState}
            // handleAddSubUnit={handleAddSubUnit}
            // // handleUpdateSubUnit={handleUpdateSubUnit}
            // handleSub={handleSub}
          />
        </div>
        // <FormData />
      )}
    </>
  );
};

export default CreateSyllabus;
