import { useState } from 'react';
import PageHeader from '../../components/common/PageHeader';
import Navbar from '../../components/Navbar';
import '../../styles/College.css';
import FormHeader from '../../components/common/FormHeader';
import CustomFormField from '../../components/customFormField';
import ButtonGroup from '../../components/common/ButtonGroup';

const Colleges = () => {
  const [collegePopup, setCollegePopUp] = useState(false);

  const handleCollegePopUp = () => {
    setCollegePopUp(!collegePopup);
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
          <div className="form-design" onClick={(e) => e.stopPropagation()}>
            <FormHeader handleForm={handleCollegePopUp} title={'Add College'} />
            <div>
              <form>
                <CustomFormField
                  label={'College Name'}
                  name={'CollegeName'}
                  type={'text'}
                  placeholder={'Enter College name'}
                />
                <CustomFormField
                  label={'Username'}
                  name={'username'}
                  type={'email'}
                  placeholder={'Enter College Username'}
                />
                <CustomFormField
                  label={'Password'}
                  name={'CollegePassword'}
                  type={'password'}
                  placeholder={'Enter Password'}
                />
                <CustomFormField
                  label={'Address'}
                  name={'CollegeAddress'}
                  type={'text'}
                  placeholder={'Enter College Address'}
                />
                <CustomFormField
                  label={'Email'}
                  name={'CollegeEmail'}
                  type={'email'}
                  placeholder={'Enter College email'}
                />
                <CustomFormField
                  label={'Phone Number'}
                  name={'CollegeNumber'}
                  type={'tel'}
                  placeholder={'Enter College Phone Number'}
                />
              </form>
              <ButtonGroup handleClose={handleCollegePopUp}/>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Colleges;
