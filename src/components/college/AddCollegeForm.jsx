import FormHeader from '../common/FormHeader';
import CustomFormField from '../customFormField';
import ButtonGroup from '../common/ButtonGroup';

const AddCollegeForm = ({
  handleCollegePopUp,
  handleCollgeFormSubmit,
  name,
  handleCName,
  userName,
  handleCUsername,
  password,
  handleCPassword,
  address,
  handleCAddress,
  email,
  handleCEmail,
  phoneNumber,
  handleCPhone,
}) => {
  return (
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
  );
};
export default AddCollegeForm;
