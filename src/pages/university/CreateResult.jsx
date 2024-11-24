import { useState } from 'react';
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

  const handleResultPop = () => {
    setAddResult(!addResult);
  };

  const handleEditPop = () => {
    setEditResult(!editResult);
  };

  const handleDeletePop = () => {
    setDeleteData(!deleteData);
  };

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
              <tr>
                <td>Board</td>
                <td>7th</td>
                <td>Passed</td>
                <td>70%</td>
                <td className="activity-button">
                  <button className="view-button" onClick={handleEditPop}>
                    Edit
                  </button>
                  <button className="delete-button" onClick={handleDeletePop}>
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {addResult && <AddResultForm handleResultPop={handleResultPop} />}
      {editResult && <EditResultForm handleEditPop={handleEditPop} />}
      {deleteData && (
        <ConfirmPopup
          onClose={handleDeletePop}
          onConfirm={handleDeletePop}
          title={'Are you sure you want to delete?'}
        />
      )}
    </>
  );
};
export default CreateResult;
