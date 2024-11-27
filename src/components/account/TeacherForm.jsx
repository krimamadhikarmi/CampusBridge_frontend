import FormHeader from '../common/FormHeader';
import CustomFormField from '../customFormField';
import ButtonGroup from '../common/ButtonGroup';
const TeacherForm = ({
  accountType,
  handleAddAccount,
  courseState,
  handleUpdateCourse,
  handleAddCourse,
  handleAddedCourse,
}) => {
  return (
    <div className="form-overlay">
      <div className="form-design">
        <FormHeader title={`Create ${accountType}`} handleForm={handleAddAccount} />
        <form>
          <CustomFormField label={'Teacher Id'} name={'TeacherId'} placeholder={'Enter the teacher id'} type={'text'} />
          <CustomFormField label={'Name'} name={'Name'} placeholder={'Enter the teacher name'} type={'text'} />
          <CustomFormField label={'Email'} name={'Email'} placeholder={'Enter the teacher email'} type={'email'} />
          <CustomFormField label={'Password'} name={'Password'} placeholder={'Enter the password'} type={'password'} />
          <CustomFormField
            label={'Phone Number'}
            name={'Phone'}
            placeholder={'Enter the teacher phone number'}
            type={'text'}
          />

          {courseState.map((course) => {
            return (
              <div key={course.id} className="course-field">
                <CustomFormField
                  label={'Course Id'}
                  name={course.name}
                  type={'text'}
                  value={course.value}
                  placeholder={course.placeholder}
                  onChange={(e) => handleUpdateCourse(e, course.id)}
                />
                <button type="button" onClick={handleAddedCourse}>
                  Add
                </button>
              </div>
            );
          })}
          <div className="add-div">
            <button onClick={handleAddCourse} className="add-field-button">
              Add More
            </button>
          </div>
          <ButtonGroup handleClose={handleAddAccount} />
        </form>
      </div>
    </div>
  );
};
export default TeacherForm;
