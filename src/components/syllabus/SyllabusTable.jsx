import React, { useEffect, useState } from 'react';
import ConfirmPopup from '../LogoutPopup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from '../../api/axios';
const SyllabusTable = () => {
  const [syllabuses, setSyllabuses] = useState([]);
  const [deleteData, setDeleteData] = useState(false);
  const [selectSyllabussId, setSelectSyllabusId] = useState(null);

  const handleDeletePop = (id) => {
    setSelectSyllabusId(id);
    setDeleteData(true);
  };

  const handleDelete = async (id) => {
    console.log(id);
    try {
      const response = await api.delete(`/Syllabus/DeleteSyllabus/${id}`);
      console.log(response.data);
      setDeleteData(false);
      toast.success('Article created successfully!', {
        style: {
          backgroundColor: '#004d4d',
          color: '#ffffff',
        },
      });
      setSyllabuses((prevSyllabus) => prevSyllabus.filter((syllabus) => syllabus.syllabusId !== id));
    } catch (e) {
      console.error('Error deleting syllabus:', e);
    }
  };

  const fetchSyllabuses = async () => {
    try {
      const response = await api.get('/Syllabus/GetSyllabus');
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
                <td>{syllabus.syllabusId}</td>
                <td>{syllabus.semester}</td>
                <td>
                  <div className="activity-button">
                    <button className="delete-button" onClick={() => handleDeletePop(syllabus.syllabusId)}>
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No syllabuses available</td>
            </tr>
          )}
        </tbody>
      </table>
      {deleteData && (
        <ConfirmPopup
          onClose={() => setDeleteData(false)}
          onConfirm={() => handleDelete(selectSyllabussId)}
          title={'Are you sure you want to delete?'}
        />
      )}
    </div>
  );
};

export default SyllabusTable;
