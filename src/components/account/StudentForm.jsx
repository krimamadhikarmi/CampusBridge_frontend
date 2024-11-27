import FormHeader from '../common/FormHeader';
import CustomFormField from '../customFormField';
import ButtonGroup from '../common/ButtonGroup';

const StudentForm = ({
  accountType,
  handleAddAccount,
  handleSubmit,
  handleIsAuthor,
  handleIsClub,
  clubState,
  electiveState,
  handleUpdateClub,
  handleUpdateElective,
  handleAddClub,
  handleAddElective,
  handleAddedClub,
  handleAddedElective,
}) => {
  return (
    <div className="form-overlay">
      <div className="form-design">
        <FormHeader title={`Create ${accountType}`} handleForm={handleAddAccount} />
        {/* Student Form */}
        <form onSubmit={handleSubmit}>
          <CustomFormField label={'Student Id'} name={'StudentId'} placeholder={'Enter the student id'} type={'text'} />
          <CustomFormField label={'Name'} name={'Name'} placeholder={'Enter the student name'} type={'text'} />
          <CustomFormField label={'Email'} name={'Email'} placeholder={'Enter the student email'} type={'email'} />
          <CustomFormField label={'Password'} name={'Password'} placeholder={'Enter the password'} type={'password'} />
          <CustomFormField
            label={'Phone Number'}
            name={'Phone'}
            placeholder={'Enter the student phone number'}
            type={'text'}
          />
          <CustomFormField
            label={'Address'}
            name={'Location'}
            placeholder={'Enter the student address'}
            type={'text'}
          />
          <div className="account-checkbox-container">
            <CustomFormField label={'Is ClubHead?'} name={'isClubHead'} type={'checkbox'} onChange={handleIsClub} />
            <CustomFormField label={'Is Author?'} name={'isAuthor'} type={'checkbox'} onChange={handleIsAuthor} />
          </div>

          <CustomFormField
            label={'Financial Id'}
            name={'FinancialId'}
            placeholder={'Enter the student financial id'}
            type={'text'}
          />
          <CustomFormField
            label={'Academic Id'}
            name={'AcademicId'}
            placeholder={'Enter the student academic id'}
            type={'text'}
          />
          <CustomFormField
            label={'College Id'}
            name={'CollegeId'}
            placeholder={'Enter the student college id'}
            type={'text'}
          />

          {clubState.map((field) => {
            return (
              <div key={field.id} className="course-field">
                <CustomFormField
                  label={'Club Id'}
                  name={field.name}
                  type={'text'}
                  value={field.value}
                  placeholder={field.placeholder}
                  onChange={(e) => handleUpdateClub(e, field.id)}
                />
                <button type="button" onClick={handleAddedClub}>
                  Add
                </button>
              </div>
            );
          })}
          <div className="add-div">
            <button onClick={handleAddClub} className="add-field-button">
              Add More
            </button>
          </div>

          {electiveState.map((elective) => {
            return (
              <div key={elective.id} className="course-field">
                <CustomFormField
                  label={'Elective Id'}
                  name={elective.name}
                  type={'text'}
                  value={elective.value}
                  placeholder={elective.placeholder}
                  onChange={(e) => handleUpdateElective(e, elective.id)}
                />
                <button type="button" onClick={handleAddedElective}>
                  Add
                </button>
              </div>
            );
          })}
          <div className="add-div">
            <button onClick={handleAddElective} className="add-field-button">
              Add More
            </button>
          </div>

          <ButtonGroup handleClose={handleAddAccount} />
        </form>
      </div>
    </div>
  );
};
export default StudentForm;
