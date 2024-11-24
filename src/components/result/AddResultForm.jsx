import FormHeader from '../common/FormHeader';
import CustomFormField from '../customFormField';
import ButtonGroup from '../common/ButtonGroup';
const AddResultForm = ({ handleResultPop }) => {
  return (
    <div className="form-overlay">
      <div className="form-design">
        <FormHeader handleForm={handleResultPop} title={'Add Result'} />
        <form>
          <CustomFormField name={'ResultId'} label={'Result Id'} placeholder={'Enter the Result Id'} type={'text'} />

          <CustomFormField
            name={'ExaminationType'}
            label={'Examination Type'}
            placeholder={'Enter the  Examination Type'}
            type={'text'}
          />

          <CustomFormField name={'Semester'} label={'Semester'} placeholder={'Enter the Semester'} type={'text'} />

          <CustomFormField
            name={'Percentage'}
            label={'Percentage'}
            placeholder={'Enter the secured percentage'}
            type={'text'}
          />

          <CustomFormField name={'Status'} label={'Status'} placeholder={'Enter the result status'} type={'text'} />

          <CustomFormField name={'StudentID'} label={'Student Id'} placeholder={'Enter the Student Id'} type={'text'} />

          <ButtonGroup handleClose={handleResultPop} />
        </form>
      </div>
    </div>
  );
};
export default AddResultForm;
