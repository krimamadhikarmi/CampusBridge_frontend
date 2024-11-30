import FormHeader from '../common/FormHeader';
import ButtonGroup from '../common/ButtonGroup';
import CustomFormField from '../customFormField';
import { useState } from 'react';
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
  handleUnitAdd,
  handleUpdateUnit,
  handleAddMoreUnit,
  handleAddSubUnit,
  handleUpdateSubUnit,
  handleSub,
  unitState,
}) => {

  const [CourseId, setCourseId] = useState('');
  const [CourseTitle, setCourseTitle] = useState('');
  const [CourseDescription, setCourseDescription] = useState('');
  const [CourseObjective,setCourseObjective]=useState('');
  const [IsElective, setIsElective] = useState('');
  const [FullMarks, setFullMarks] = useState('');
  const [PassMarks, setPassMarks] = useState('');
  const [CreditHour, setCreditHour] = useState('');
  const [LabDescription,setLabDescription] = useState('');

  const handleSubmit = () =>{

    const courseData = {
      CourseId,CourseTitle,CourseDescription,
      CourseObjective,IsElective,
      FullMarks,PassMarks,CreditHour,
      LabDescription
    }
    handleCourseSubmit(courseData);
  }

  return (

    <div className="form-design" onClick={(e) => e.stopPropagation()}>
      <FormHeader handleForm={handleCourseForm} title={'Create Courses'} />
      <div>
        <form onSubmit={handleSubmit}>
          <CustomFormField
            label={'Course Id'}
            name={'CourseId'}
            type={'text'}
            placeholder={'Enter the Course Id'}
            onChange={(e)=>setCourseId(e.target.value)}
          />
          <CustomFormField
            label={'Course Title'}
            name={'CourseTitle'}
            type={'text'}
            placeholder={'Enter the Course Title'}
            onChange={(e)=>setCourseTitle(e.target.value)}
          />
          <CustomFormField
            label={'Course Description'}
            name={'CourseDescription'}
            type={'text'}
            placeholder={'Enter the Course Description'}
            onChange={(e)=>setCourseDescription(e.target.value)}
          />
          <CustomFormField
            label={'Course Objectives'}
            name={'CourseObjective'}
            type={'text'}
            placeholder={'Enter the Course Objective'}
            onChange={(e)=>setCourseObjective(e.target.value)}
          />
          <div className="checkbox-container">
            <CustomFormField
              label={'Is Elective?'}
              name={'isElective'}
              type={'checkbox'}
              onChange={(e)=>setIsElective(e.target.checked)}
            />
          </div>

          <CustomFormField
            label={'Full Marks'}
            name={'FullMarks'}
            type={'text'}
            placeholder={'Enter the Full Marks of Course'}
            onChange={(e)=>setFullMarks(e.target.value)}
          />
          <CustomFormField
            label={'Pass Marks'}
            name={'PassMarks'}
            type={'text'}
            placeholder={'Enter the Pass Marks of Course'}
            onChange={(e)=>setPassMarks(e.target.value)}
          />
          <CustomFormField
            label={'Credit Hour'}
            name={'CreditHour'}
            type={'text'}
            placeholder={'Enter the Course Credit Hours'}
            onChange={(e)=>setCreditHour(e.target.value)}
          />
          <CustomFormField
            label={'Lab Description'}
            name={'LabDescription'}
            type={'text'}
            placeholder={'Enter the Lab Description'}
            onChange={(e)=>setLabDescription(e.target.value)}
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
                <button type="button" onClick={handleAddBook}>
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

                {unit.subUnits.map((subUnit) => (
                  <div key={subUnit.id} className="course-field">
                    <CustomFormField
                      label={'Subunit'}
                      name={'Subunit'}
                      type={'text'}
                      value={subUnit.title}
                      onChange={(e) => handleUpdateSubUnit(unit.id, subUnit.id, e.target.value)}
                    />
                    <button onClick={handleSub} className="add-field-button">
                      Add
                    </button>
                  </div>
                ))}

                <div className="unit-add-div">
                  <button onClick={(e) => handleAddSubUnit(unit.id, e)} className="add-field-button">
                    Add SubUnit
                  </button>
                  <button type="button" onClick={handleUnitAdd} className="unit-add-button">
                    Add Unit
                  </button>
                </div>
              </div>
            );
          })}
          <div className="add-div">
            <button onClick={handleAddMoreUnit} className="add-field-button">
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
