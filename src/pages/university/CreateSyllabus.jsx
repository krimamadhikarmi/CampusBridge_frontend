import { useState } from 'react';
import Navbar from '../../components/Navbar';

import SyllabusForm from '../../components/syllabus/SyllabusForm';
import CourseForm from '../../components/syllabus/CourseForm';
import { useNavigate } from 'react-router-dom';
import SyllabusTable from '../../components/syllabus/SyllabusTable';
import CoursesTable from '../../components/syllabus/CoursesTable';
import '../../styles/common.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from '../../api/axios';

const CreateSyllabus = () => {
  const [toogleSyllabusForm, setToogleSyllabusForm] = useState(false);
  const [toogleCourseForm, setToogleCourseForm] = useState(false);
  const navigate = useNavigate();

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
    const completeSyllabusData = {
      syllabusId: syllabusData.syllabusId,
      courseId: syllabusData.courseId,
      semester: syllabusData.semester,
      allowedElectiveNo: syllabusData.allowedElectiveNo,
    };

    console.log('Before api call:', completeSyllabusData);

    try {
      const response = await api.post('/Syllabus/CreateSyllabus', completeSyllabusData);

      console.log('Response data:', response.data);

      toast.success('Syllabus created successfully!', {
        style: {
          backgroundColor: '#004d4d',
          color: '#ffffff',
        },
      });

      await api.get('/Syllabus/GetSyllabus');
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

    console.log(completeCourseData);

    try {
      const response = await api.post('/Syllabus/CreateCourse', completeCourseData);

      console.log('Response data:', response.data);

      await api.get('/Syllabus/GetCourse');
    } catch (e) {
      console.log(e, 'error');
    }
  };

  // handling book field

  // handling unit form

  // const handleUnitAdd = (event) => {
  //   event.preventDefault();
  //   console.log('added unit');
  //   console.log('unitid', unitId);
  //   console.log('tile', title);
  //   console.log('hour', creditHour);
  // };

  //handling subunit
  // Add a new subunit to a specific unit
  // const handleAddSubUnit = (unitId, e) => {
  //   e.preventDefault();
  //   // e.stopPropagation();
  //   unitDispatch({ type: 'ADD_SUB_UNIT', unitId });
  // };

  // const handleSub = (event) => {
  //   event.preventDefault();
  //   event.stopPropagation(); // Prevent the event from propagating to the parent div
  //   console.log('Added subunit');
  // };

  // const [subUnits, setSubUnits] = useState([]);

  // Update a subunit's title

  return (
    <>
      <Navbar />
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar
        newestOnTop={false}
        closeButton={false}
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 9999,
        }}
      />
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
        </div>
      )}

      {toogleCourseForm && (
        <div className="form-overlay">
          <CourseForm handleCourseSubmit={handleCourseSubmit} handleCourseForm={handleCourseForm} />
        </div>
      )}
    </>
  );
};

export default CreateSyllabus;
