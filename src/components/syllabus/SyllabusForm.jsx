import FormHeader from '../common/FormHeader';
import ButtonGroup from '../common/ButtonGroup';
import CustomFormField from '../customFormField';

const SyllabusForm = ({
  handleSyllabusForm,
  handleFormSubmit,
  handleSyllabusid,
  handleSemester,
  handleAddCourseId,
  handleElective,
  handleAddField,
  handleUpdateCourse,
  fieldState,
}) => {
  return (
    <div className="form-design" onClick={(e) => e.stopPropagation()}>
      <FormHeader handleForm={handleSyllabusForm} title={'Create Syllabus'} />
      <div>
        <form onSubmit={handleFormSubmit}>
          <CustomFormField
            label={'Syllabus Id'}
            name={'SyllabusId'}
            type={'text'}
            placeholder={'Enter the Syllabus Id'}
            onChange={handleSyllabusid}
          />
          <CustomFormField
            label={'Semester'}
            name={'Semester'}
            type={'text'}
            placeholder={'Enter the semester'}
            onChange={handleSemester}
          />

          {fieldState.map((field) => {
            return (
              <div key={field.id} className="course-field">
                <CustomFormField
                  label={'Course Id'}
                  name={field.name}
                  type={'text'}
                  value={field.value}
                  placeholder={field.placeholder}
                  onChange={(e) => handleUpdateCourse(e, field.id)}
                />
                <button type="button" onClick={handleAddCourseId}>
                  Add
                </button>
              </div>
            );
          })}
          <div className="add-div">
            <button onClick={handleAddField} className="add-field-button">
              Add Courses
            </button>
          </div>

          <CustomFormField
            label={'Number of Electives'}
            name={'AllowedElectiveNo'}
            type={'number'}
            placeholder={'Enter the number of electives'}
            onChange={handleElective}
          />

          <ButtonGroup handleClose={handleSyllabusForm} />
        </form>
      </div>
    </div>
  );
};

export default SyllabusForm;
