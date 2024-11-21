import { useState } from 'react';
import PageHeader from '../../components/common/PageHeader';
import Navbar from '../../components/Navbar';
import '../../styles/College.css';
import AddCollegeForm from '../../components/college/AddCollegeForm';
import CollegeTable from '../../components/college/CollegeTable';

const Colleges = () => {
  const [collegePopup, setCollegePopUp] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(0);

  const college = true;

  const handleCollegePopUp = () => {
    setCollegePopUp(!collegePopup);
  };

  const handleCName = (event) => {
    setName(event.target.value);
  };

  const handleCEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleCUsername = (event) => {
    setUserName(event.target.value);
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

  const handleCollgeFormSubmit = () => {
    console.log('name', name);
    console.log('email', email);
    console.log('username', userName);
    console.log('password', password);
    console.log('address', address);
    console.log('phonenumber', phoneNumber);
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
            <CollegeTable />
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
            handleCUsername={handleCUsername}
            userName={userName}
            handleCPassword={handleCPassword}
            password={password}
            handleCPhone={handleCPhone}
            phoneNumber={phoneNumber}
            address={address}
            handleCAddress={handleCAddress}
          />
        </div>
      )}
    </>
  );
};
export default Colleges;
