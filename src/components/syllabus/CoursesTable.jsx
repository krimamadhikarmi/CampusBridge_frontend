import React, { useState, useEffect } from 'react';
import ConfirmPopup from '../LogoutPopup';
import axios from 'axios';

const CoursesTable = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteData, setDeleteData] = useState(false);
  const [selectCourseId, setSelectCourseId] = useState(null);

  const handleDeletePop = (id) => {
    setSelectCourseId(id);
    setDeleteData(true);
  };
  const handleDelete = async (id) => {
    console.log(id);
    try {
      const response = await axios.delete(`https://localhost:7276/api/Syllabus/DeleteCourse/${id}`);
      console.log(response.data);

      setCourses((prevCourses) => prevCourses.filter((course) => course.courseId !== id));
      setDeleteData(false);
    } catch (e) {
      console.error('Error deleting result', e);
    }
  };

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('https://localhost:7276/api/Syllabus/GetCourse');
        const data = await response.json();
        setCourses(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching courses:', error);
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (courses.length === 0) {
    return <div>No courses available.</div>;
  }

  return (
    <div className="data-present">
      <table className="data-table">
        <thead>
          <tr>
            <th>Courses</th>
            <th>Semester</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.courseId}>
              <td>{course.courseTitle}</td> {/* Display courseTitle */}
              <td className="activity-button">
                <button className="delete-button" onClick={() => handleDeletePop(course.courseId)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {deleteData && (
        <ConfirmPopup
          onClose={() => setDeleteData(false)}
          onConfirm={() => handleDelete(selectCourseId)}
          title={'Are you sure you want to delete ?'}
        />
      )}
    </div>
  );
};

export default CoursesTable;
