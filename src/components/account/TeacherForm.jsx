import FormHeader from '../common/FormHeader';
import CustomFormField from '../customFormField';
import ButtonGroup from '../common/ButtonGroup';
import { useState } from 'react';
const TeacherForm = ({ accountType, handleAddAccount, handleSubmit, id }) => {
  const [TeacherId, setTeacherId] = useState('');
  const [TeacherName, setTeacherName] = useState('');
  const [TeacherEmail, setTeacherEmail] = useState('');
  const [TeacherPassword, setTeacherPassword] = useState('');
  const [TeacherPhone, setTeacherPhone] = useState('');

  const [formData, setFormData] = useState({
    teacherId: '',
    name: '',
    email: '',
    password: '',
    phone: '',
    courseIds: [],
    collegeId: '',
  });

  const [currentCourseId, setCurrentCourseId] = useState('');

  const addCourseId = () => {
    if (currentCourseId.trim() !== '') {
      setFormData((prev) => ({
        ...prev,
        courseIds: [...prev.courseIds, currentCourseId],
      }));
      setCurrentCourseId('');
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const teacherData = {
      teacherId: TeacherId,
      name: TeacherName,
      email: TeacherEmail,
      password: TeacherPassword,
      phone: TeacherPhone,
      courseIds: formData.courseIds,
      collegeId: id,
    };
    console.log('Teacher Data', teacherData);
    handleSubmit(event,teacherData);
    console.log(JSON.stringify(teacherData), 'dent');
  };

  return (
    <div className="form-overlay">
      <div className="form-design">
        <FormHeader title={`Create ${accountType}`} handleForm={handleAddAccount} />
        <form onSubmit={handleFormSubmit}>
          <CustomFormField
            label={'Teacher Id'}
            name={'TeacherId'}
            placeholder={'Enter the teacher id'}
            type={'text'}
            onChange={(e) => setTeacherId(e.target.value)}
          />
          <CustomFormField
            label={'Name'}
            name={'Name'}
            placeholder={'Enter the teacher name'}
            type={'text'}
            onChange={(e) => setTeacherName(e.target.value)}
          />
          <CustomFormField
            label={'Email'}
            name={'Email'}
            placeholder={'Enter the teacher email'}
            type={'email'}
            onChange={(e) => setTeacherEmail(e.target.value)}
          />
          <CustomFormField
            label={'Password'}
            name={'Password'}
            placeholder={'Enter the password'}
            type={'password'}
            onChange={(e) => setTeacherPassword(e.target.value)}
          />
          <CustomFormField
            label={'Phone Number'}
            name={'Phone'}
            placeholder={'Enter the teacher phone number'}
            type={'text'}
            onChange={(e) => setTeacherPhone(e.target.value)}
          />
          <div className="course-field">
            <CustomFormField
              label={'Course Id'}
              // name={course.name}
              type={'text'}
              value={currentCourseId}
              placeholder={'Enter course Id'}
              onChange={(e) => setCurrentCourseId(e.target.value)}
            />
            <button type="button" onClick={addCourseId}>
              Add
            </button>
          </div>
          <div>
            <ul>
              {formData.courseIds.map((courseId, index) => (
                <li key={index}>{courseId}</li>
              ))}
            </ul>
          </div>

          {/* {courseState.map((course) => {
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
          </div> */}
          <ButtonGroup handleClose={handleAddAccount} />
        </form>
      </div>
    </div>
  );
};
export default TeacherForm;
