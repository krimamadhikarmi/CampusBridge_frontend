import { useState } from 'react';
import CloseButton from '../common/CloseButton';
import CustomFormField from '../customFormField';
const StudentAssignmentList = ({
  id,

  title,
  subject,
  submissionDate,
  statusClass,
  statusText,
  index,
}) => {
  const [assignmentPop, setAssignmentPop] = useState(false);

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
            </div>
            <div className='assignment-form'>
                <form>
                    <div className='form-submit'>
                    <CustomFormField placeholder={'Submit your assignment'} type={'file'}/>
                    <button className='add-button'>Submit</button>
                    </div>
                </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default StudentAssignmentList;
