import { useState } from 'react';
import CloseButton from '../common/CloseButton';
import CustomFormField from '../customFormField';
import TextAreaWithFile from '../TextAreaField';
import ButtonGroup from '../common/ButtonGroup';
import axios from 'axios';
import { useToken } from '../../context/TokenContext';
import { v4 as uuidv4 } from 'uuid';

const StudentAssignmentList = ({ id, question, title, subject, submissionDate, statusClass, statusText, index }) => {
  const [assignmentPop, setAssignmentPop] = useState(false);
  const [answer, setText] = useState('');

  const [submissionId, setSubmissionId] = useState('');
  const { id: tid } = useToken();
  const [files, setFile] = useState(null);

  const [FileId, setFileId] = useState(''); 

  const currentDate = new Date();
  const date = new Date(submissionDate.split('T')[0]);
  const differenceInTime = currentDate - date;
  const differenceInDays = Math.floor(differenceInTime / (1000 * 60 * 60 * 24)); // Convert to days

  const handleAssignmentSubmit = (event) => {
    event.preventDefault();
    console.log('assign id:', id);
    console.log('text', answer);
    console.log('file', files);
    const newSubmissionId = "SUBMISSION" + files?.name + id + uuidv4();
    setSubmissionId(newSubmissionId);
    
    console.log("files.name: ", files?.name);
    console.log("id: ", id);
    console.log("uuidv4(): ", uuidv4());
    console.log(newSubmissionId,"ns");
    console.log(submissionId,"si")
    const formData = new FormData();
    formData.append('SubmissionId', submissionId);
    formData.append('Answer', answer);
    formData.append('StudentId', tid);
    formData.append('AssignmentId', id);

    if (files) {
      formData.append('FileId', FileId);
      formData.append('FileToUpload', files);
      formData.append('FileName', files.name);
    }
    console.log('formdata', formData); //formdata isnot displayed in console because it is special type of data so using below method for validataing formData

    //validating formData
    for (let pair of formData.entries()) {
      console.log(`${pair[0]}:`, pair[1]);
    }

    try {
      const response = axios.post('https://localhost:7276/api/Assignment/SubmitAssignment', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Response data:', response.data);
      console.log('Response data:', JSON.stringify(  console.log('Response data:', response.data)));
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

  const handleAssignmentPop = () => {
    setAssignmentPop(!assignmentPop);
  };
  return (
    <>
      <div key={id} className="assignment-item" style={{ cursor: 'pointer' }} onClick={handleAssignmentPop}>
        <div className="assignment-content">
          <h2 className="assignment-title">
            {index + 1}. {title}
          </h2>
          <div className="assignment-info">
            <p className="subject-style">{subject}</p>
            <p className="date-style">Submission Date: {submissionDate}</p>
            <p className={`status-badge ${statusClass}`}>{statusText}</p>
          </div>
        </div>
      </div>
      {assignmentPop && (
        <div className="form-overlay">
          <div className="assignment-details-box">
            <CloseButton toggleBox={handleAssignmentPop} variant={'assignmentbox'} />
            <div className="assignment-details">
              <h2>{title}</h2>
              <p>
                <strong>Subject:</strong> {subject}
              </p>
              <p>
                <strong>Submission Date:</strong> {submissionDate}
              </p>
              <p>
                <strong>Question:</strong>
                Complete the following given assignment
                <br />
                <a href={question} target="_blank" rel="noopener noreferrer">
                  Click here to view the question.
                </a>
              </p>
            </div>
            {differenceInDays > 2 ? (
              <div className="late-submission">
                You cannot submit the assignment now. The submission period has expired.
              </div>
            ) : (
              <div className="assignment-form">
                <form onSubmit={handleAssignmentSubmit}>
                  <div className="answer-field">
                    {/* <TextAreaWithFile onFilesSelected={setSelectedFiles}

                     /> */}
                    <CustomFormField
                      label={'Assigment Id'}
                      name={'AssignmentId'}
                      placeholder={'Enter the assignment id'}
                      type={'text'}
                      value={id}
                      disabled
                    />
                    <CustomFormField
                      label={'File'}
                      name={'File'}
                      placeholder={'Upload the file'}
                      type={'file'}
                      onChange={handleFileChange}
                    />
                    <CustomFormField
                      placeholder={'Submit your assignment'}
                      type={'text'}
                      name={answer}
                      // label={'Answer'}
                      onChange={(e) => setText(e.target.value)}
                    />
                  </div>
                  <ButtonGroup handleClose={handleAssignmentPop} />
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
export default StudentAssignmentList;
