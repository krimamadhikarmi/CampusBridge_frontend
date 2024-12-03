import FormHeader from '../common/FormHeader';
import ButtonGroup from '../common/ButtonGroup';
import CustomFormField from '../customFormField';
import { useState } from 'react';

const SyllabusForm = ({
  handleSyllabusForm,
  handleSyllabusSubmit,
  handleSyllabusid,
  handleSemester,
  handleAddCourseId,
  handleElective,
  handleAddField,
  handleUpdateCourse,
  fieldState,
}) => {

  const [syllabusId, setSyllabusId] = useState('');
  const [semester, setSemester] = useState('');
  const [electiveno, setElectiveno] = useState('');

  const handleSubmit = (event)=>{
    event.preventDefault();
    const syllabusData = {
      syllabusId,semester,electiveno
    }
    handleSyllabusSubmit(syllabusData,event);
  }

  return (
    <div className="form-design" onClick={(e) => e.stopPropagation()}>
      <FormHeader handleForm={handleSyllabusForm} title={'Create Syllabus'} />
      <div>
        <form onSubmit={handleSubmit}>
          <CustomFormField
            label={'Syllabus Id'}
            name={'SyllabusId'}
            type={'text'}
            placeholder={'Enter the Syllabus Id'}
            onChange={(e)=>setSyllabusId(e.target.value)}
          />
          <CustomFormField
            label={'Semester'}
            name={'Semester'}
            type={'text'}
            placeholder={'Enter the semester'}
            onChange={(e)=>setSemester(e.target.value)}
          />

{fieldState.map((field) => (
  <div key={field.id} className="course-field">
    <CustomFormField
      label="Course Id"
      name={field.name}
      type="text"
      value={field.value}
      onChange={(e) => handleUpdateCourse(e, field.id)} // Correctly pass the event and field ID
    />
    <button type="button" onClick={handleAddCourseId}>
                  Add
                </button>
  </div>
))}
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
            onChange={(e)=>setElectiveno(e.target.value)}
          />

          <ButtonGroup handleClose={handleSyllabusForm} />
        </form>
      </div>
    </div>
  );
};

export default SyllabusForm;
