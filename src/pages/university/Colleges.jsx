import { useState } from 'react';
import PageHeader from '../../components/common/PageHeader';
import Navbar from '../../components/Navbar';
import '../../styles/College.css';
import AddCollegeForm from '../../components/college/AddCollegeForm';
import CollegeTable from '../../components/college/CollegeTable';
import '../../styles/common.css';

const Colleges = () => {
  const [collegePopup, setCollegePopUp] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhoneNumber] = useState('');
  const [description, setDescription] = useState('');
  const [id, setId] = useState('');

  const [showEdit, setShowEdit] = useState(false);

  const handleEditForm = () => {
    setShowEdit(!showEdit);
  };

  const college = true;

  const handleCollegePopUp = () => {
    setCollegePopUp(!collegePopup);
  };

  const handleCName = (event) => {
    setName(event.target.value);
  };
  const handleCId = (event) => {
    setId(event.target.value);
  };

  const handleCEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleCPassword = (event) => {
    setPassword(event.target.value);
  };

  const handleCAddress = (event) => {
    setAddress(event.target.value);
  };
  const handleCPhone = (event) => {
    setPhoneNumber(event.target.value);
  };
  const handleCDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleCollgeFormSubmit = (formData) => {
    const collegeData = {
      collegeId: formData.CollegeId,
      name: formData.CollegeName,
      email: formData.CollegeEmail,
      password: formData.CollegePassword,
      location: formData.CollegeAddress,
      phone: formData.CollegePhone,
      description: formData.CollegeDescription,
      universityId: formData.UniversityId,
    };
    console.log(JSON.stringify(collegeData));
  };

  return (
    <>
      <Navbar />
      <PageHeader pageTitle={'Colleges'} />
      <div className="college-box">
        <div className="college-button">
          <button className="add-college-button" onClick={handleCollegePopUp}>
            Add College
          </button>
        </div>
        {college ? (
          <div className="college-present">
            <CollegeTable handleEditForm={handleEditForm} showEdit={showEdit} />
          </div>
        ) : (
          <div className="no-data-list">No Registered College </div>
        )}
      </div>

      {collegePopup && (
        <div className="form-overlay">
          <AddCollegeForm
            handleCollegePopUp={handleCollegePopUp}
            handleCollgeFormSubmit={handleCollgeFormSubmit}
            name={name}
            handleCName={handleCName}
            email={email}
            handleCEmail={handleCEmail}
            handleCPassword={handleCPassword}
            password={password}
            handleCPhone={handleCPhone}
            phone={phone}
            address={address}
            handleCAddress={handleCAddress}
            handleCId={handleCId}
            id={id}
            description={description}
            setDescription={handleCDescription}
          />
        </div>
      )}
    </>
  );
};
export default Colleges;
