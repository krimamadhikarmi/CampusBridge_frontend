import CustomFormField from '../customFormField';
import FormHeader from '../common/FormHeader';
import ButtonGroup from '../common/ButtonGroup';
const AddAssignmentForm = ({handleAddForm,currentDate}) => {
  return (
    <>
      <div className="form-overlay">
        <div className="form-design">
          <FormHeader handleForm={handleAddForm} title={'Add Assignment'} />
          <form>
            <CustomFormField
              label={'Assigment Id'}
              name={'AssignmentId'}
              placeholder={'Enter the assignment id'}
              type={'text'}
            />
            <CustomFormField label={'Question'} name={'Question'} placeholder={'Enter the question'} type={'text'} />
            <CustomFormField label={'File'} name={'File'} placeholder={'Upload the file'} type={'file'} />
            <CustomFormField label={'Course Id'} name={'CourseId'} placeholder={'Enter the course id'} type={'text'} />
            <CustomFormField label={'Assigned Date'} name={'AssignedDate'} type={'date'} value={currentDate} />
            <CustomFormField label={'Submission Date'} name={'SubmissionDate'} type={'date'} />
            <CustomFormField
              label={'Teacher Id'}
              placeholder={'Enter the teacher id'}
              name={'Teacher Id'}
              type={'text'}
            />
            <ButtonGroup handleClose={handleAddForm} />
          </form>
        </div>
      </div>
    </>
  );
};
export default AddAssignmentForm;
