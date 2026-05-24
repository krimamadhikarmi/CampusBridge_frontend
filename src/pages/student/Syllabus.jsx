import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import PageHeader from '../../components/common/PageHeader';
import '../../styles/Syllabus.css';

import api from '../../api/axios';

const Syllabus = () => {
  const [syllabus, setSyllabus] = useState(null);
  const [activeCourse, setActiveCourse] = useState(null);

  const fetchSyllabusById = async () => {
    try {
      const response = await api.get('Syllabus/GetSyllabusById/CSC7');
      console.log(response.data);
      setSyllabus(response.data);
      // Set the default active course to the first course in the list
      if (response.data && response.data.courseDTO && response.data.courseDTO.length > 0) {
        setActiveCourse(response.data.courseDTO[0]);
      }
    } catch (e) {
      console.error('API call failed:', e);
    }
  };

  useEffect(() => {
    fetchSyllabusById();
  }, []);

  const handleCourseClick = (course) => {
    setActiveCourse(course);
  };

  return (
    <>
      <Navbar />
      <PageHeader pageTitle={'Syllabus'} />
      <div className="syllabus-box">
        <div className="syllabus-side-bar">
          {syllabus && syllabus.courseDTO && syllabus.courseDTO.length > 0 ? (
            <>
              {/* Regular Courses Section */}
              <div>
                <h3>Regular Courses</h3>
                {syllabus.courseDTO.map(
                  (course) =>
                    !course.isElective && (
                      <p
                        key={course.courseId}
                        className={activeCourse && activeCourse.courseId === course.courseId ? 'active' : ''}
                        onClick={() => handleCourseClick(course)}>
                        {course.courseTitle}
                      </p>
                    ),
                )}
              </div>

              {/* Elective Courses Section */}
              <div>
                <h3>Elective Courses</h3>
                {syllabus.courseDTO
                  .filter((course) => course.isElective)
                  .map((course) => (
                    <p
                      key={course.courseId}
                      className={activeCourse && activeCourse.courseId === course.courseId ? 'active' : ''}
                      onClick={() => handleCourseClick(course)}>
                      {course.courseTitle}
                    </p>
                  ))}
              </div>
            </>
          ) : (
            <p>No courses available</p>
          )}
        </div>

        <div className="syllabus-content">
          {activeCourse ? (
            <div>
              <h2>{activeCourse.courseId}</h2>
              <p>
                <strong>Description:</strong> {activeCourse.courseDescription}
              </p>
              <p>
                <strong>Objective:</strong> {activeCourse.courseObjective}
              </p>
              <p>
                <strong>Full Marks:</strong> {activeCourse.fullMarks}
              </p>
              <p>
                <strong>Pass Marks:</strong> {activeCourse.passMarks}
              </p>
              <p>
                <strong>Credit Hour:</strong> {activeCourse.creditHour}
              </p>
              <p>
                <strong>Lab Description:</strong> {activeCourse.labDescription}
              </p>
              <p>
                <strong>Books:</strong> {activeCourse.books.join(', ')}
              </p>
              <p>
                <strong>Is Elective:</strong> {activeCourse.isElective ? 'Yes' : 'No'}
              </p>

              {/* Display Units */}
              <h3>Units</h3>
              {activeCourse.unitsDTO && activeCourse.unitsDTO.length > 0 ? (
                <ul>
                  {activeCourse.unitsDTO.map((unit) => (
                    <li key={unit.unitId}>
                      <strong>{unit.title}</strong>
                      <p>Completion Hours: {unit.completionHours}</p>
                      <p>Sub-units:</p>
                      <ul>
                        {unit.subUnits.map((subUnit, index) => (
                          <li key={index}>{subUnit}</li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No units available</p>
              )}
            </div>
          ) : (
            <p>Select a course to view details</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Syllabus;
