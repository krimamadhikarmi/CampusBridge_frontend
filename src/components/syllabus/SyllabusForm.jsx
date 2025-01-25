import FormHeader from '../common/FormHeader';
import ButtonGroup from '../common/ButtonGroup';
import CustomFormField from '../customFormField';
import { useState } from 'react';

const SyllabusForm = ({ handleSyllabusForm, handleSyllabusSubmit }) => {
  const [SyllabusId, setSyllabusId] = useState('');
  const [Semester, setSemester] = useState('');
  const [Electiveno, setElectiveno] = useState('');
  const [formData, setFormData] = useState({
    syllabusId: '',
    courseId: [],
    semester: '',
    allowedElectiveNo: '',
  });

  const [currentCourseId, setCurrentCourseId] = useState('');

  const addCourse = () => {
    if (currentCourseId.trim() !== '') {
      setFormData((prev) => ({
        ...prev,
        courseId: [...prev.courseId, currentCourseId],
      }));
      setCurrentCourseId('');
    }
  };

  // const handleSyllabuSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log('FormData', formData);
  // };

  const handleSubmit = (event) => {
    //event.preventDefault();
    const syllabusData = {
      syllabusId: SyllabusId,
      courseId: formData.courseId,
      semester: Semester,
      allowedElectiveNo: Electiveno,
    };
    handleSyllabusSubmit(syllabusData, event);
    console.log('Form Data', syllabusData);
    console.log(JSON.stringify(syllabusData));
  };

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
            onChange={(e) => setSyllabusId(e.target.value)}
          />
          <CustomFormField
            label={'Semester'}
            name={'Semester'}
            type={'text'}
            placeholder={'Enter the semester'}
            onChange={(e) => setSemester(e.target.value)}
          />

          {/* {fieldState.map((field) => (
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
          ))} */}
          {/* <div className="add-div">
            <button onClick={handleAddField} className="add-field-button">
              Add Courses
            </button>
          </div> */}
          <div className="course-field">
            <CustomFormField
              label="Course Id"
              // name={currentCourseId}
              type="text"
              placeholder={'Enter course id'}
              value={currentCourseId}
              onChange={(e) => setCurrentCourseId(e.target.value)} // Correctly pass the event and field ID
            />
            <button type="button" onClick={addCourse}>
              Add
            </button>
          </div>
          <div>
            <ul>
              {formData.courseId.map((course, index) => (
                <li key={index}>{course}</li>
              ))}
            </ul>
          </div>

          <CustomFormField
            label={'Number of Electives'}
            name={'AllowedElectiveNo'}
            type={'number'}
            placeholder={'Enter the number of electives'}
            onChange={(e) => setElectiveno(e.target.value)}
          />

          <ButtonGroup handleClose={handleSyllabusForm} />
        </form>
      </div>
    </div>
  );
};

export default SyllabusForm;
