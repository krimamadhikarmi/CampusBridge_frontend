import { useState } from 'react';
import FormHeader from '../common/FormHeader';
import CustomFormField from '../customFormField';
import ButtonGroup from '../common/ButtonGroup';
import ConfirmPopup from '../LogoutPopup';

const CollegeTable = ({ handleEditForm, showEdit }) => {
  const [formData, setFormData] = useState({
    name: 'Samriddhi College',
    email: 'samriddhi@college.com',
    password: 'samriddhi123',
    phone: '016611112',
    location: 'Lokanthali,Bhaktapur',
    description: 'It is an IT College',
  });

  const [deletepop, setDeletePop] = useState(false);

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

  const handleDelete = () => {
    setDeletePop(!deletepop);
  };

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
          <tr>
            <td>Samriddhi College</td>
            <td>samriddhi@college.com</td>
            <td>Lokanthali,Bhaktapur</td>
            <td className="activity-button">
              <button className="view-button" onClick={handleEditForm}>
                Edit
              </button>
              <button className="delete-button" onClick={handleDelete}>
                Delete
              </button>
            </td>
          </tr>
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
      {deletepop && (
        <ConfirmPopup onConfirm={handleDelete} onClose={handleDelete} title={'Are you sure you want to delete?'} />
      )}
    </>
  );
};
export default CollegeTable;
