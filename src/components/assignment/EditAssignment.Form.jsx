import CustomFormField from '../customFormField';
import ButtonGroup from '../common/ButtonGroup';
import FormHeader from '../common/FormHeader';
const EditAssignmentForm = ({ handleEdit, title, subject, currentDate, submissionDate }) => {
  return (
    <>
      <div className="form-overlay">
        <div className="form-design">
          <FormHeader title={'Edit Assignment'} handleForm={handleEdit} />
          <form>
            <CustomFormField
              label={'Question'}
              name={'Question'}
              placeholder={'Enter the question'}
              type={'text'}
              value={title}
            />
            <CustomFormField
              label={'Course Id'}
              name={'CourseId'}
              placeholder={'Enter the course id'}
              type={'text'}
              value={subject}
            />
            <CustomFormField label={'Assigned Date'} name={'AssignedDate'} type={'date'} value={currentDate} />

            <CustomFormField label={'Submission Date'} name={'SubmissionDate'} type={'date'} value={submissionDate} />

            <ButtonGroup handleClose={handleEdit} />
          </form>
        </div>
      </div>
    </>
  );
};
export default EditAssignmentForm;
