import { useState } from 'react';
import FormHeader from '../common/FormHeader';
import CustomFormField from '../customFormField';
import ButtonGroup from '../common/ButtonGroup';
import ConfirmPopup from '../LogoutPopup';
import { useEffect } from 'react';
import axios from 'axios';
import { useToken } from '../../context/TokenContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CollegeTable = ({ handleEditForm, showEdit, colleges, setColleges }) => {
  // const [colleges, setColleges] = useState([]);
  const [deleteData, setDeleteData] = useState(false);
  const [selectCollegeId, setSelectCollegeId] = useState(null);
  const { id } = useToken();

  const handleDeletePop = (cid) => {
    console.log('collegeid', cid);
    setSelectCollegeId(cid);
    setDeleteData(true);
  };

  const handleDelete = async (cid) => {
    console.log(cid, 'collegeId');
    console.log(id, 'user');
    try {
      const response = await axios.delete(`https://localhost:7276/api/College/DeleteCollege/${cid}/${id}`);
      console.log(response.data);
      setColleges((prevColleges)=>prevColleges.filter((college)=>college.collegeId !==cid))
      setDeleteData(false);
      toast.success('College deleted successfully!', {
        style: {
          backgroundColor: '#004d4d',
          color: '#ffffff',
        },
      });
      // fetchColleges();
    } catch (e) {
      console.error('Error deleting college:', e);
    }
  };

  const [formData, setFormData] = useState({
    name: 'Samriddhi College',
    email: 'samriddhi@college.com',
    password: 'samriddhi123',
    phone: '016611112',
    location: 'Lokanthali,Bhaktapur',
    description: 'It is an IT College',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated Profile Data:', formData);
    handleEditForm();
  };

  // const fetchColleges = async () => {
  //   try {
  //     const response = await axios.get('https://localhost:7276/api/College/GetCollege');
  //     setColleges(response.data);
  //   } catch (error) {
  //     console.error('Error fetching colleges:', error);
  //   }
  // };

  // useEffect(() => {
  //   fetchColleges();
  // }, []);

  return (
    <>
    
      <table className="college-table">
        <thead>
          <tr>
            <th>College Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Activity</th>
          </tr>
        </thead>
        <tbody>
          {colleges.length > 0 ? (
            colleges.map((college) => (
              <tr key={college.collegeId}>
                <td>{college.name}</td>
                <td>{college.email}</td>
                <td>{college.location}</td>
                <td>
                  <div className="activity-button">
                    <button className="delete-button" onClick={() => handleDeletePop(college.collegeId)}>
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No colleges available</td>
            </tr>
          )}
        </tbody>
      </table>
      {showEdit && (
        <div className="form-overlay">
          <div className="form-design">
            <FormHeader handleForm={handleEditForm} title={'Edit College'} />
            <form onSubmit={handleSubmit}>
              <CustomFormField
                label={'College Name'}
                name={'name'}
                type={'text'}
                placeholder={'Enter College name'}
                value={formData.name}
                onChange={handleInputChange}
              />

              <CustomFormField
                label={'Address'}
                name={'location'}
                type={'text'}
                placeholder={'Enter College Address'}
                value={formData.location}
                onChange={handleInputChange}
              />
              <CustomFormField
                label={'Phone Number'}
                name={'phone'}
                type={'tel'}
                placeholder={'Enter College Phone Number'}
                value={formData.phone}
                onChange={handleInputChange}
              />
              <CustomFormField
                label={'Description'}
                name={'description'}
                type={'text'}
                placeholder={'Enter College Description'}
                value={formData.description}
                onChange={handleInputChange}
              />
              <ButtonGroup handleClose={handleEditForm} />
            </form>
          </div>
        </div>
      )}
      {deleteData && (
        <ConfirmPopup
          onClose={() => setDeleteData(false)}
          onConfirm={() => handleDelete(selectCollegeId)}
          title={'Are you sure you want to delete?'}
        />
      )}
    </>
  );
};
export default CollegeTable;
