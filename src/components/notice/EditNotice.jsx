import FormHeader from '../common/FormHeader';
import ButtonGroup from '../common/ButtonGroup';
import CustomFormField from '../customFormField';
const EditNotice = ({ handleEditForm, id, content, title, getCheckboxOptions, currentDate }) => {
  return (
    <div className="form-overlay">
      <div className="form-design">
        <FormHeader handleForm={handleEditForm} title={'Edit Notice'} />
        <form>
          <CustomFormField
            name={'NoticeId'}
            label={'Notice Id'}
            placeholder={'Enter the Notice Id'}
            type={'text'}
            value={id}
          />
          <CustomFormField
            name={'Title'}
            label={'Title'}
            placeholder={'Enter the title of notice'}
            type={'text'}
            value={title}
          />
          <CustomFormField
            name={'Description'}
            label={'Description'}
            placeholder={'Enter the Notice Description'}
            type={'text'}
            value={content}
          />
          <div className="check-group">
            <p>Who is your notice directed to?</p>
            <div className="check-group-item">{getCheckboxOptions()}</div>
          </div>

          <CustomFormField label={'Date'} name={'date'} type={'date'} value={currentDate} />
          <ButtonGroup handleClose={handleEditForm} />
        </form>
      </div>
    </div>
  );
};
export default EditNotice;
