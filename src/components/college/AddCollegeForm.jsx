import FormHeader from '../common/FormHeader';
import CustomFormField from '../customFormField';
import ButtonGroup from '../common/ButtonGroup';

const AddCollegeForm = ({
  handleCollegePopUp,
  handleCollgeFormSubmit,
  name,
  handleCName,
  password,
  handleCPassword,
  address,
  handleCAddress,
  email,
  handleCEmail,
  phone,
  handleCPhone,
  id,
  handleCId,
  description,
  handleCDescription,
}) => {
  return (
    <div className="form-design">
      <FormHeader handleForm={handleCollegePopUp} title={'Add College'} />
      <form onSubmit={handleCollgeFormSubmit}>
        <CustomFormField
          label={'College Id'}
          name={'CollegeId'}
          type={'text'}
          placeholder={'Enter College Id'}
          value={id}
          onChange={handleCId}
        />
        <CustomFormField
          label={'College Name'}
          name={'Name'}
          type={'text'}
          placeholder={'Enter College name'}
          value={name}
          onChange={handleCName}
        />
        <CustomFormField
          label={'Email'}
          name={'Email'}
          type={'email'}
          placeholder={'Enter College email'}
          onChange={handleCEmail}
          value={email}
        />

        <CustomFormField
          label={'Password'}
          name={'Password'}
          type={'password'}
          placeholder={'Enter Password'}
          onChange={handleCPassword}
          value={password}
        />
        <CustomFormField
          label={'Address'}
          name={'Location'}
          type={'text'}
          placeholder={'Enter College Address'}
          value={address}
          onChange={handleCAddress}
        />

        <CustomFormField
          label={'Phone Number'}
          name={'phone'}
          type={'tel'}
          placeholder={'Enter College Phone Number'}
          value={phone}
          onChange={handleCPhone}
        />
        <CustomFormField
          label={'Description'}
          name={'Description'}
          type={'text'}
          placeholder={'Enter College Description'}
          value={description}
          onChange={handleCDescription}
        />
        <ButtonGroup handleClose={handleCollegePopUp} />
      </form>
    </div>
  );
};
export default AddCollegeForm;
