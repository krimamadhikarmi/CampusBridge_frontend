import React, { useState, useEffect } from 'react';

const CoursesTable = () => {
  const [courses, setCourses] = useState([]); // State to store the fetched courses
  const [loading, setLoading] = useState(true); // State to manage loading state

  // Fetch courses data on component mount
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('https://localhost:7276/api/Syllabus/GetCourse');
        const data = await response.json();
        setCourses(data); // Set the courses state with the fetched data
        setLoading(false); // Stop loading once data is fetched
      } catch (error) {
        console.error('Error fetching courses:', error);
        setLoading(false); // Stop loading even if there is an error
      }
    };

    fetchCourses(); // Call the fetchCourses function
  }, []); // Empty dependency array ensures this runs only once, on mount

  // If still loading or no courses available, show a message
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
                <button className="delete-button">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoursesTable;
