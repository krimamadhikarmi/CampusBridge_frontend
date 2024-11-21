import { useState } from 'react';
import PageHeader from '../../components/common/PageHeader';
import Navbar from '../../components/Navbar';
import '../../styles/College.css';
import FormHeader from '../../components/common/FormHeader';
import CustomFormField from '../../components/customFormField';
import ButtonGroup from '../../components/common/ButtonGroup';

const Colleges = () => {
  const [collegePopup, setCollegePopUp] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(0);

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
        <div className="college-present">
          <table className="college-table">
            <thead>
              <tr>
                <th>College Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Activity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Samriddhi College</td>
                <td>samriddhi@college.com</td>
                <td>samriddhi123</td>
                <td className="activity-button">
                  <button className="view-button">Edit</button>
                </td>
              </tr>
              <tr>
                <td>Samriddhi College</td>
                <td>samriddhi@college.com</td>
                <td>samriddhi123</td>
                <td className="activity-button">
                  <button className="view-button">Edit</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {collegePopup && (
        <div className="form-overlay">
          <div className="form-design">
            <FormHeader handleForm={handleCollegePopUp} title={'Add College'} />

            <form onSubmit={handleCollgeFormSubmit}>
              <CustomFormField
                label={'College Name'}
                name={'CollegeName'}
                type={'text'}
                placeholder={'Enter College name'}
                value={name}
                onChange={handleCName}
              />
              <CustomFormField
                label={'Username'}
                name={'username'}
                type={'email'}
                placeholder={'Enter College Username'}
                value={userName}
                onChange={handleCUsername}
              />
              <CustomFormField
                label={'Password'}
                name={'CollegePassword'}
                type={'password'}
                placeholder={'Enter Password'}
                onChange={handleCPassword}
                value={password}
              />
              <CustomFormField
                label={'Address'}
                name={'CollegeAddress'}
                type={'text'}
                placeholder={'Enter College Address'}
                value={address}
                onChange={handleCAddress}
              />
              <CustomFormField
                label={'Email'}
                name={'CollegeEmail'}
                type={'email'}
                placeholder={'Enter College email'}
                onChange={handleCEmail}
                value={email}
              />
              <CustomFormField
                label={'Phone Number'}
                name={'CollegeNumber'}
                type={'tel'}
                placeholder={'Enter College Phone Number'}
                value={phoneNumber}
                onChange={handleCPhone}
              />
              <ButtonGroup handleClose={handleCollegePopUp} />
            </form>
          </div>
        </div>
      )}
    </>
  );
};
export default Colleges;
