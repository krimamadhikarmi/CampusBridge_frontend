import FormHeader from '../common/FormHeader';
import ButtonGroup from '../common/ButtonGroup';
import CustomFormField from '../customFormField';
const CourseForm = ({
  handleCourseSubmit,
  handleCourseForm,
  handleElectiveChange,
  handleUpdateBook,
  handleAddBook,
  handleBookField,
  bookState,
  handleCourseId,
  handleCourseTitle,
  handleUnitForm,
  handleUpdateUnit,
  handleAddUnit,
  handleAddSubUnit,
  unitState,
}) => {
  return (
    <div className="form-design" onClick={(e) => e.stopPropagation()}>
      <FormHeader handleForm={handleCourseForm} title={'Create Courses'} />
      <div>
        <form onSubmit={handleCourseSubmit}>
          <CustomFormField
            label={'Course Id'}
            name={'CourseId'}
            type={'text'}
            placeholder={'Enter the Course Id'}
            onChange={handleCourseId}
          />
          <CustomFormField
            label={'Course Title'}
            name={'CourseTitle'}
            type={'text'}
            placeholder={'Enter the Course Title'}
            onChange={handleCourseTitle}
          />
          <CustomFormField
            label={'Course Description'}
            name={'CourseDescription'}
            type={'text'}
            placeholder={'Enter the Course Description'}
          />
          <CustomFormField
            label={'Course Objectives'}
            name={'CourseObjective'}
            type={'text'}
            placeholder={'Enter the Course Objective'}
          />
          <div className="checkbox-container">
            <CustomFormField
              label={'Is Elective?'}
              name={'isElective'}
              type={'checkbox'}
              onChange={handleElectiveChange}
            />
          </div>

          <CustomFormField
            label={'Full Marks'}
            name={'FullMarks'}
            type={'text'}
            placeholder={'Enter the Full Marks of Course'}
          />
          <CustomFormField
            label={'Pass Marks'}
            name={'PassMarks'}
            type={'text'}
            placeholder={'Enter the Pass Marks of Course'}
          />
          <CustomFormField
            label={'Credit Hour'}
            name={'CreditHour'}
            type={'text'}
            placeholder={'Enter the Course Credit Hours'}
          />
          <CustomFormField
            label={'Lab Description'}
            name={'LabDescription'}
            type={'text'}
            placeholder={'Enter the Lab Description'}
          />
          {bookState.map((book) => {
            return (
              <div key={book.id} className="course-field">
                <CustomFormField
                  label={'Books'}
                  name={book.name}
                  type={'text'}
                  value={book.value}
                  placeholder={book.placeholder}
                  onChange={(e) => handleUpdateBook(e, book.id)}
                />
                <button type="button" onClick={handleAddSubUnit}>
                  Add
                </button>
              </div>
            );
          })}
          <div className="add-div">
            <button onClick={handleBookField} className="add-field-button">
              Add Book
            </button>
          </div>
          {unitState.map((unit) => {
            return (
              <div key={unit.id}>
                <div className="course-field">
                  <CustomFormField
                    label={'Unit Id'}
                    name={'UnitId'}
                    type={'text'}
                    value={unit.unitId}
                    onChange={(e) => handleUpdateUnit(unit.id, 'unitId', e.target.value)}
                  />
                </div>
                <div className="course-field">
                  <CustomFormField
                    label={'Title'}
                    name={'Title'}
                    type={'text'}
                    value={unit.title}
                    onChange={(e) => handleUpdateUnit(unit.id, 'title', e.target.value)}
                  />
                </div>
                <div className="course-field">
                  <CustomFormField
                    label={'Credit Hour'}
                    name={'CreditHour'}
                    type={'text'}
                    value={unit.creditHour}
                    onChange={(e) => handleUpdateUnit(unit.id, 'creditHour', e.target.value)}
                  />
                </div>
                <button type="button" onClick={handleUnitForm} className="add-button">
                  Add Unit
                </button>

                {/* {unit.subUnits.map((subunit) => (
                  <div className="course-field">
                    <CustomFormField
                      type={'text'}
                      label={'Subunit'}
                      name={'SubUnit'}
                      value={subunit.value}
                      onChange={(e) => handleUpdateSubUnit(e, subunit.id,unit.id)}
                    />
                    <button type="button" onClick={() => setSelectedUnitId(unit.id)}>
                      Add Subunit
                    </button>
                  </div>
                ))} */}
              </div>
            );
          })}
          <div className="add-div">
            <button onClick={handleAddUnit} className="add-field-button">
              Add More Unit
            </button>
          </div>
          <ButtonGroup handleClose={handleCourseForm} />
        </form>
      </div>
    </div>
  );
};
export default CourseForm;
