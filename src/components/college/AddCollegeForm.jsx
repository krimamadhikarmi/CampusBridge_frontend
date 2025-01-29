import FormHeader from '../common/FormHeader';
import CustomFormField from '../customFormField';
import ButtonGroup from '../common/ButtonGroup';
import { useState } from 'react';

const AddCollegeForm = ({ handleCollegePopUp, handleCollgeFormSubmit }) => {
  const [CollegeId, setCollegeId] = useState('');
  const [CollegeName, setCollegeName] = useState('');
  const [CollegeEmail, setCollegeEmail] = useState('');
  const [CollegePassword, setCollegePassword] = useState('');
  const [CollegePhone, setCollegePhone] = useState('');
  const [CollegeAddress, setCollegeAddress] = useState('');
  const [CollegeDescription, setCollegeDescription] = useState('');
  const [UniversityId, setUniversityId] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = {
      CollegeId,
      CollegeName,
      CollegeEmail,
      CollegePassword,
      CollegePhone,
      CollegeAddress,
      UniversityId,
      CollegeDescription,
    };
    handleCollgeFormSubmit(formData);
    console.log(formData);
  };

  return (
    <div className="form-design">
      <FormHeader handleForm={handleCollegePopUp} title={'Add College'} />
      <form onSubmit={handleFormSubmit}>
        <CustomFormField
          label={'College Id'}
          name={'CollegeId'}
          type={'text'}
          placeholder={'Enter College Id'}
          value={CollegeId}
          onChange={(e) => setCollegeId(e.target.value)}
        />
        <CustomFormField
          label={'College Name'}
          name={'Name'}
          type={'text'}
          placeholder={'Enter College Name'}
          value={CollegeName}
          onChange={(e) => setCollegeName(e.target.value)}
        />
        <CustomFormField
          label={'Email'}
          name={'Email'}
          type={'email'}
          placeholder={'Enter College Email'}
          value={CollegeEmail}
          onChange={(e) => setCollegeEmail(e.target.value)}
        />
        <CustomFormField
          label={'Password'}
          name={'Password'}
          type={'password'}
          placeholder={'Enter Password'}
          value={CollegePassword}
          onChange={(e) => setCollegePassword(e.target.value)}
        />
        <CustomFormField
          label={'Address'}
          name={'Location'}
          type={'text'}
          placeholder={'Enter College Address'}
          value={CollegeAddress}
          onChange={(e) => setCollegeAddress(e.target.value)}
        />
        <CustomFormField
          label={'Phone Number'}
          name={'Phone'}
          type={'tel'}
          placeholder={'Enter College Phone Number'}
          value={CollegePhone}
          onChange={(e) => setCollegePhone(e.target.value)}
        />
        <CustomFormField
          label={'Description'}
          name={'Description'}
          type={'text'}
          placeholder={'Enter College Description'}
          value={CollegeDescription}
          onChange={(e) => setCollegeDescription(e.target.value)}
        />
        <ButtonGroup handleClose={handleCollegePopUp} />
      </form>
    </div>
  );
};

export default AddCollegeForm;
