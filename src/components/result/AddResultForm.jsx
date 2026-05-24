import FormHeader from '../common/FormHeader';
import CustomFormField from '../customFormField';
import ButtonGroup from '../common/ButtonGroup';
import { useState } from 'react';
import api from '../../api/axios';
const handleResultSubmit = async (resultData, event) => {
  event.preventDefault();
  const completeResultData = {
    resultId: resultData.ResultId,
    examinationType: resultData.ExamType,
    semester: resultData.Semester,
    percentage: resultData.Percentage,
    status: resultData.Status,
    studentId: resultData.StudentId,
  };
  console.log(JSON.stringify(completeResultData));
  try {
    const response = await api.post('/Result/CreateResult', JSON.stringify(completeResultData));
    console.log('Response data:', response.data);
  } catch (e) {
    console.log(e);
  }
  console.log(resultData.ResultId);
};
const AddResultForm = ({ handleResultPop }) => {
  const [ResultId, setResultId] = useState('');
  const [ExamType, setExamType] = useState('');
  const [Semester, setSemester] = useState('');
  const [Percentage, setPercentage] = useState('');
  const [Status, setStatus] = useState('');
  const [StudentId, setStudentId] = useState('');

  const handleSubmit = (event) => {
    // event.preventDefault();
    const resultData = {
      ResultId,
      ExamType,
      Semester,
      Percentage,
      Status,
      StudentId,
    };
    handleResultSubmit(resultData, event);
  };
  return (
    <div className="form-overlay">
      <div className="form-design">
        <FormHeader handleForm={handleResultPop} title={'Add Result'} />
        <form onSubmit={handleSubmit}>
          <CustomFormField
            name={'ResultId'}
            label={'Result Id'}
            placeholder={'Enter the Result Id'}
            type={'text'}
            onChange={(e) => setResultId(e.target.value)}
          />

          <CustomFormField
            name={'ExaminationType'}
            label={'Examination Type'}
            placeholder={'Enter the  Examination Type'}
            type={'text'}
            onChange={(e) => setExamType(e.target.value)}
          />

          <CustomFormField
            name={'Semester'}
            label={'Semester'}
            placeholder={'Enter the Semester'}
            type={'text'}
            onChange={(e) => setSemester(e.target.value)}
          />

          <CustomFormField
            name={'Percentage'}
            label={'Percentage'}
            placeholder={'Enter the secured percentage'}
            type={'text'}
            onChange={(e) => setPercentage(e.target.value)}
          />

          <CustomFormField
            name={'Status'}
            label={'Status'}
            placeholder={'Enter the result status'}
            type={'text'}
            onChange={(e) => setStatus(e.target.value)}
          />

          <CustomFormField
            name={'StudentID'}
            label={'Student Id'}
            placeholder={'Enter the Student Id'}
            type={'text'}
            onChange={(e) => setStudentId(e.target.value)}
          />

          <ButtonGroup handleClose={handleResultPop} />
        </form>
      </div>
    </div>
  );
};
export default AddResultForm;
