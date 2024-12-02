import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useToken } from '../../context/TokenContext';

const ResultTable = () => {
  const { role } = useToken();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch the results from the API on page load using axios
  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await axios.get('https://localhost:7276/api/Result/GetResult');
        setResults(response.data); // Set the fetched data to state
      } catch (error) {
        console.error('Error fetching results:', error);
      } finally {
        setLoading(false); // Stop loading after the API call
      }
    };

    fetchResults();
  }, []); // Empty dependency array ensures it runs only once on page load

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="result-present">
      <table className="result-table">
        <thead>
          <tr>
            <th>Examination</th>
            <th>Semester</th>
            <th>Status</th>
            <th>Percentage</th>
            {role.includes('University') && <th>Action</th>}
          </tr>
        </thead>
        <tbody>
          {results.length > 0 ? (
            results.map((examData) => (
              <tr key={examData.resultId}>
                <td>{examData.examinationType}</td>
                <td>{examData.semester}</td>
                <td>{examData.status}</td>
                <td>{examData.percentage}%</td>
                {role.includes('University') && (
                  <td className="activity-button">
                    <button className="view-button">Edit</button>
                    <button className="delete-button">Delete</button>
                  </td>
                )}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={role.includes('University') ? 5 : 4}>No results available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ResultTable;
