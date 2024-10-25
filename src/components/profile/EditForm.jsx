import { useState } from 'react';
import CustomFormField from '../customFormField';
import CloseButton from '../CloseButton';
const EditForm = ({ toogleEditForm }) => {
  const [formData, setFormData] = useState({
    name: 'Krima Madhikarmi',
    faculty: 'Bsc.CSIT',
    college: 'Samriddhi College',
    batch: '2075',
    address: 'Suryabinayak,Bhaktapur',
    phone: '98433838828',
    email: 'madhikrima20@gmail.com',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated Profile Data:', formData);
    toogleEditForm();
  };
  return (
    <>
      <div className="edit-form">
        <div className="form-head">
          Edit Your Profile
          <CloseButton toggleBox={toogleEditForm} fill={'#004d4d'} variant={"editform"} />
        </div>
        <div>
          <form onSubmit={handleSubmit} className="form-fields">
            <CustomFormField label={'Name'} name={'name'} value={formData.name} type={'text'} readOnly={true} />
            <div className="form-field-data">
              <div>
                <CustomFormField
                  label="Faculty"
                  name="faculty"
                  type="text"
                  placeholder="Enter your faculty"
                  value={formData.faculty}
                />
              </div>

              <div>
                <CustomFormField
                  label="College"
                  name="college"
                  type="text"
                  placeholder="Enter your college"
                  value={formData.college}
                />
              </div>
            </div>

            <div className="form-field-data">
              <div>
                <CustomFormField
                  label="Batch"
                  name="batch"
                  type="text"
                  placeholder="Enter your batch"
                  value={formData.batch}
                />
              </div>

              <div>
                <CustomFormField
                  label="Address"
                  name="address"
                  type="text"
                  placeholder="Enter your address"
                  value={formData.address}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="form-field-data">
              <div>
                <CustomFormField
                  label="Phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <CustomFormField
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="button-group">
              <button type="submit" className="submit-button">
                Save Changes
              </button>
              <button type="submit" className="cancel-button" onClick={toogleEditForm}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default EditForm;
