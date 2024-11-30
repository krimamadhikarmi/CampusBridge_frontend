import FormHeader from '../common/FormHeader';
import CustomFormField from '../customFormField';
import ButtonGroup from '../common/ButtonGroup';
import { useState } from 'react';
const TeacherForm = ({
  accountType,
  handleAddAccount,
  courseState,
  handleSubmit,
  handleUpdateCourse,
  handleAddCourse,
  handleAddedCourse,
}) => {
  const [TeacherId, setTeacherId] = useState('');
  const [TeacherName,setTeacherName] = useState('');
  const [TeacherEmail,setTeacherEmail] = useState('');
  const [TeacherPassword,setTeacherPassword] = useState('');
  const [TeacherPhone,setTeacherPhone] = useState('');

  const handleFormSubmit = (event) =>{
    event.preventDefault();
    const formData = {
      TeacherId, TeacherName, TeacherEmail,
      TeacherPassword,TeacherPhone
    }
    handleSubmit(formData);
  }



  return (
    <div className="form-overlay">
      <div className="form-design">
        <FormHeader title={`Create ${accountType}`} handleForm={handleAddAccount} />
        <form onSubmit={handleFormSubmit}>
          <CustomFormField label={'Teacher Id'} name={'TeacherId'} placeholder={'Enter the teacher id'} type={'text'}
          onChange={(e)=>setTeacherId(e.target.value)} />
          <CustomFormField label={'Name'} name={'Name'} placeholder={'Enter the teacher name'} type={'text'}
          onChange={(e)=>setTeacherName(e.target.value)}
           />
          <CustomFormField label={'Email'} name={'Email'} placeholder={'Enter the teacher email'} type={'email'}
          onChange={(e)=>setTeacherEmail(e.target.value)}
           />
          <CustomFormField label={'Password'} name={'Password'} placeholder={'Enter the password'} type={'password'}
          onChange={(e)=>setTeacherPassword(e.target.value)}/>
          <CustomFormField
            label={'Phone Number'}
            name={'Phone'}
            placeholder={'Enter the teacher phone number'}
            type={'text'} onChange={(e)=>setTeacherPhone(e.target.value)}
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
