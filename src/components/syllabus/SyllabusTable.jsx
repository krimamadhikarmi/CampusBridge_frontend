import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SyllabusTable = ({ handleViewClick }) => {
  const [syllabuses, setSyllabuses] = useState([]);

  // Fetch syllabuses from the API
  const fetchSyllabuses = async () => {
    try {
      const response = await axios.get('https://localhost:7276/api/Syllabus/GetSyllabus');
      setSyllabuses(response.data); // Assuming the response is an array of syllabuses
    } catch (error) {
      console.error('Error fetching syllabuses:', error);
    }
  };

  useEffect(() => {
    fetchSyllabuses();
  }, []);

  return (
    <div className="data-present">
      <table className="data-table">
        <thead>
          <tr>
            <th>Syllabus</th>
            <th>Semester</th>
            <th>Activity</th>
          </tr>
        </thead>
        <tbody>
          {syllabuses.length > 0 ? (
            syllabuses.map((syllabus) => (
              <tr key={syllabus.syllabusId}>
                <td>{syllabus.syllabusId}</td> {/* Assuming syllabusName exists */}
                <td>{syllabus.semester}</td>
                <td>
                  <div className="activity-button">
                    <button
                      className="delete-button"
                      
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2">No syllabuses available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SyllabusTable;
