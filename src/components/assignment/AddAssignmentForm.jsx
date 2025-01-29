import CustomFormField from '../customFormField';
import FormHeader from '../common/FormHeader';
import ButtonGroup from '../common/ButtonGroup';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useToken } from '../../context/TokenContext';

import { v4 as uuidv4 } from 'uuid';
const AddAssignmentForm = ({ handleAddForm, currentDate }) => {
  const [AssignmentId, setAssignment] = useState('');
  const [Question, setQuestion] = useState('');
  const [CourseId, setCourseId] = useState('');
  const [AssignedDate, setAssignedDate] = useState('');
  const [SubmissionDate, setSubmissionDate] = useState('');
  const [TeacherId, setTeacherId] = useState('');
  const {id:teacherId} = useToken();

  const [file, setFile] = useState(null);
  const [FileId, setFileId] = useState(''); // State for unique FileId

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append('AssignmentId', AssignmentId);
    formData.append('Question', Question);
    formData.append('CourseId', CourseId);
    formData.append('AssignedDate', AssignedDate);
    formData.append('SubmissionDate', SubmissionDate);
    formData.append('TeacherId', teacherId);

    if (file) {
      formData.append('FileId', FileId);
      formData.append('FileToUpload', file);
      formData.append('FileName', file.name);
    }
    console.log('Form submitted successfully!');
    //checking formData files
    for (let pair of formData.entries()) {
      console.log(`${pair[0]}:`, pair[1]);
    }

    try {
      const response = await axios.post('https://localhost:7276/api/Assignment/CreateAssignment', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('assignment1', response.data);
    } catch (e) {
      console.log(e);
    }
  };

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      setFileId(uuidv4()); // Generate a unique FileId when a file is selected
    }
  };

  useEffect(() => {
    if (currentDate) {
      setAssignedDate(currentDate);
    }
  }, [currentDate]);

  return (
    <>
      <div className="form-overlay">
        <div className="form-design">
          <FormHeader handleForm={handleAddForm} title={'Add Assignment'} />
          <form onSubmit={handleSubmit}>
            <CustomFormField
              label={'Assigment Id'}
              name={'AssignmentId'}
              placeholder={'Enter the assignment id'}
              type={'text'}
              onChange={(e) => setAssignment(e.target.value)}
            />
            <CustomFormField
              label={'Question'}
              name={'Question'}
              placeholder={'Enter the question'}
              type={'text'}
              onChange={(e) => setQuestion(e.target.value)}
            />
            <CustomFormField
              label={'File'}
              name={'File'}
              placeholder={'Upload the file'}
              type={'file'}
              onChange={handleFileChange}
            />
            <CustomFormField
              label={'Course Id'}
              name={'CourseId'}
              placeholder={'Enter the course id'}
              type={'text'}
              onChange={(e) => setCourseId(e.target.value)}
            />
            <CustomFormField
              label={'Assigned Date'}
              name={'AssignedDate'}
              type={'date'}
              value={currentDate}
              onChange={(e) => setAssignedDate(e.target.value)}
            />
            <CustomFormField
              label={'Submission Date'}
              name={'SubmissionDate'}
              type={'date'}
              onChange={(e) => setSubmissionDate(e.target.value)}
            />
            {/* <CustomFormField
              label={'Teacher Id'}
              placeholder={'Enter the teacher id'}
              name={'TeacherId'}
              type={'text'}
              onChange={(e) => setTeacherId(e.target.value)}
            /> */}
            <ButtonGroup handleClose={handleAddForm} />
          </form>
        </div>
      </div>
    </>
  );
};
export default AddAssignmentForm;
