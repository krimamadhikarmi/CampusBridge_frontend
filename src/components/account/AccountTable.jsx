import axios from 'axios';
import ConfirmPopup from '../LogoutPopup';
import { useState } from 'react';
import { useToken } from '../../context/TokenContext';

const AccountTable = ({ filterData, handleStudentFetch, handleTeacherFetch }) => {
  const [deleteData, setDeleteData] = useState(false);
  const [selectAccountId, setSelectAccountId] = useState(null);
  // const { id } = useToken();

  // const handleDeletePop = (aid) => {
  //   console.log(aid, 'id');
  //   setSelectAccountId(aid);
  //   setDeleteData(true);
  // };

  // const handleDelete = async (aid) => {
  //   console.log(aid, 'user');
  //   try {
  //     const roleResponse = await axios.get(`https://localhost:7276/api/Auth/GetNameFromId?id=${aid}`);

  //     console.log(roleResponse.data.role, 'role');

  //     const role = roleResponse.data.role;

  //     let deleteUrl = '';

  //     if (role === 'Student') {
  //       deleteUrl = `https://localhost:7276/api/Student/DeleteStudent/${aid}/${id}`;
  //     } else if (role === 'Teacher') {
  //       deleteUrl = `https://localhost:7276/api/Teacher/DeleteTeacher/${aid}/${id}`;
  //     } else {
  //       console.error('Unknown role:', role);
  //       return;
  //     }

  //     const response = await axios.delete(deleteUrl);
  //     console.log(response.data);

  //     // handleTeacherFetch();
  //     // handleStudentFetch();
  //     setDeleteData(false);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
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
                <button className="view-button">Edit</button>
                {/* <button className="delete-button" onClick={() => handleDeletePop(account.email)}>
                  Delete
                </button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {deleteData && (
        <ConfirmPopup
          onClose={() => setDeleteData(false)}
          onConfirm={() => handleDelete(selectAccountId)}
          title={'Are you sure you wnat to delete?'}
        />
      )}
    </div>
  );
};
export default AccountTable;
