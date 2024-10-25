import { useState } from 'react';
import CustomFormField from '../customFormField';
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
          <div className="closebutton">
            {/* Add the SVG as a close button */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="20"
              height="20"
              viewBox="0 0 30 30"
              fill="#004d4d"
              style={{ cursor: 'pointer' }}
              onClick={toogleEditForm}>
              <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"></path>
            </svg>
          </div>
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
