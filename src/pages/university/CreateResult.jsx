import { useEffect, useState } from 'react';
import axios from 'axios';
import PageHeader from '../../components/common/PageHeader';
import Navbar from '../../components/Navbar';
import '../../styles/Result.css';
import AddResultForm from '../../components/result/AddResultForm';
import EditResultForm from '../../components/result/EditResultForm';
import ConfirmPopup from '../../components/LogoutPopup';

const CreateResult = () => {
  const [addResult, setAddResult] = useState(false);
  const [editResult, setEditResult] = useState(false);
  const [deleteData, setDeleteData] = useState(false);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedResultId, setSelectedResultId] = useState(null);

  const handleResultPop = () => {
    setAddResult(!addResult);
  };

  const handleEditPop = () => {
    setEditResult(!editResult);
  };

  
  const handleDeletePop = (id) => {
    setSelectedResultId(id);
    setDeleteData(true); 
  };

  const handleDelete = async (id) => {
    console.log(id);
    try {
      const response = await axios.delete(`https://localhost:7276/api/Result/DeleteResult/${id}`);
      console.log(response.data);

     
      setResults((prevResults) => prevResults.filter((result) => result.resultId !== id));

      
      setDeleteData(false);
    } catch (e) {
      console.error('Error deleting result:', e);
    }
  };


  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await axios.get('https://localhost:7276/api/Result/GetResult');
        setResults(response.data); 
      } catch (error) {
        console.error('Error fetching results:', error);
      } finally {
        setLoading(false); 
      }
    };

    fetchResults();
  }, []); 

  return (
    <>
      <Navbar />
      <PageHeader pageTitle={'Result'} />
      <div className="result-body">
        <div className="result-button">
          <button className="add-result-button" onClick={handleResultPop}>
            Add Result
          </button>
        </div>
        <div className="create-result">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <table className="create-result-table">
              <thead>
                <tr>
                  <th>Examination</th>
                  <th>Semester</th>
                  <th>Status</th>
                  <th>Percentage</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {results.length > 0 ? (
                  results.map((result) => (
                    <tr key={result.resultId}>
                      <td>{result.examinationType}</td>
                      <td>{result.semester}</td>
                      <td>{result.status}</td>
                      <td>{result.percentage}%</td>
                      <td className="activity-button">
                        <button className="view-button" onClick={handleEditPop}>
                          Edit
                        </button>
                        <button className="delete-button" onClick={() => handleDeletePop(result.resultId)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5">No results available</td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
      {addResult && <AddResultForm handleResultPop={handleResultPop} />}
      {editResult && <EditResultForm handleEditPop={handleEditPop} />}

      {deleteData && (
        <ConfirmPopup
          onClose={() => setDeleteData(false)} 
          onConfirm={() => handleDelete(selectedResultId)} 
          title={'Are you sure you want to delete?'}
        />
      )}
    </>
  );
};

export default CreateResult;
