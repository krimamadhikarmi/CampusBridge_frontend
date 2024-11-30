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

  const handleFormSubmit = async (syllabusData) => {

    var completeSyllabusData = {
      syllabusId : syllabusData.syllabusId,
      courseId : courseIds,
      semester : syllabusData.semester,
      allowedElectiveNo : syllabusData.electiveno
    }
    console.log("Before api call:",JSON.stringify(completeSyllabusData));

    try{
      const response = await axios.post('https://localhost:7276/api/Syllabus/CreateSyllabus',JSON.stringify(completeSyllabusData),{
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log("Response data:",response.data);
    } catch(e){
      console.log(e);
    }


    handleSyllabusForm();
  };

  const handleAddField = (event) => {
    event.preventDefault();
    dispatch({ type: 'ADD', name: 'CourseId', placeholder: 'Enter Course Id', value: '' });
  };

  const [courseIds,setCourseIds] = useState([]);

  const handleUpdateCourse = (event, id) => {
    if(id){
      setCourseIds((prevIds)=>prevIds.concat(id));
    }
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

  const handleCourseSubmit = async (courseData) => {

    const completeCourseData = {
      courseId: courseData.CourseId,
      courseTitle: courseData.CourseTitle,
      courseDescription: courseData.CourseDescription,
      courseObjective: courseData.CourseObjective,
      isElective: courseData.IsElective,
      fullMarks: courseData.FullMarks,
      passMarks: courseData.PassMarks,
      creditHour: courseData.CreditHour,
      labDescription: courseData.LabDescription,
      books: books,
      unitsDTO : units
    }

    console.log(JSON.stringify(completeCourseData));

    try{
      const response = await axios.post('https://localhost:7276/api/Syllabus/CreateCourse', JSON.stringify(completeCourseData), {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log("Response data:",response.data);
    } catch(e){
       console.log(e);
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
  const handleBookField = (event) => {
    event.preventDefault();
    bookDispatch({ type: 'ADD', name: 'Books', placeholder: 'Enter Books', value: '' });
  };

  const [books,setBooks]=useState([]);

  const handleUpdateBook = (event, id) => {
    const value = event.target.value;

    if(value){
      setBooks((prevBook)=>prevBook.concat(value));
    }

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

  const [units,setUnits]=useState([]);

  const handleUpdateUnit = (unitId, field, value, event) => {
    setUnitId(value);
    setCreditHour(value);
    setTitle(value);

    setUnits((prevUnits) =>
      prevUnits.map((unit) =>
        unit.unitId === unitId ? { ...unit, [field]: value } : unit
      )
    );

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
  const handleAddSubUnit = (unitId, e) => {
    e.preventDefault();
    // e.stopPropagation();
    unitDispatch({ type: 'ADD_SUB_UNIT', unitId });
  };

  const handleSub = (event) => {
    event.preventDefault();
    event.stopPropagation(); // Prevent the event from propagating to the parent div
    console.log("Added subunit");
  };

  const [subUnits,setSubUnits]=useState([]);

  // Update a subunit's title
  const handleUpdateSubUnit = (unitId, subUnitId, value) => {

      if (value) {
    setUnits((prevUnits) =>
      prevUnits.map((unit) =>
        unit.unitId === unitId
          ? {
              ...unit,
              subUnits: [...unit.subUnits, value], // Append the subunit to the correct unit
            }
          : unit
      )
    );
  }
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
            handleSyllabusSubmit={handleFormSubmit}
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
            handleSub={handleSub}
          />
        </div>
      )}
    </>
  );
};

export default CreateSyllabus;
