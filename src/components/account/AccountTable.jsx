import ConfirmPopup from '../LogoutPopup';
import { useState } from 'react';
import { useToken } from '../../context/TokenContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from '../../api/axios';

const AccountTable = ({ filterData, handleStudentFetch, handleTeacherFetch,setTbldata }) => {
  const [deleteData, setDeleteData] = useState(false);
  const [selectAccountId, setSelectAccountId] = useState(null);
  const [selectAccountRole, setSelectAccountRole] = useState(null);

  const { id } = useToken();

  const handleDeletePop = (aid,arole) => {
    console.log(aid, 'id');
    console.log(arole, 'role');
    setSelectAccountId(aid);
    setSelectAccountRole(arole);
    setDeleteData(true);
    // handleDelete(aid,arole);
  };

  const handleDelete = async (aid,arole) => {
    console.log(aid, 'user');
    try {
      let deleteUrl = '';
      if (arole === 'Student') {
        deleteUrl = `/Student/DeleteStudent/${aid}/${id}`;
      } else if (arole === 'Teacher') {
        deleteUrl = `/Teacher/DeleteTeacher/${aid}/${id}`;
      } else {
        console.error('Unknown role:');
        return;
      }

      const response = await api.delete(deleteUrl);
      console.log(response.data);
      setTbldata((prevData) => prevData.filter((account) => account.id !== aid));
      setDeleteData(false);
      toast.success('Account deleted successfully!', {
        style: {
          backgroundColor: '#004d4d',
          color: '#ffffff',
        },
      });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="account-present">
      <table className="account-table">
        <thead>
          <tr>
            <th>S.N</th>
            <th>Name</th>
            <th>Role</th>
            <th>Activity</th>
          </tr>
        </thead>
        <tbody>
          {console.log(filterData)}
          {filterData.map((account, index) => (
            <tr key={account.id}>
              <td>{index + 1}</td>
              <td>{account.name}</td>
              <td>{account.role}</td>
              <td className="activity-button">
                {/* <button className="view-button">Edit</button> */}
                <button className="delete-button" onClick={() => handleDeletePop(account.id,account.role)}>
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
          onConfirm={() => handleDelete(selectAccountId,selectAccountRole)}
          title={'Are you sure you want to delete?'}
        />
      )}
    </div>
  );
};
export default AccountTable;
