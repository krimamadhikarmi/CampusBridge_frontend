import FormHeader from '../common/FormHeader';
import CustomFormField from '../customFormField';
import ButtonGroup from '../common/ButtonGroup';
const AddNotice = ({ handleArticlePop, currentDate, getCheckboxOptions }) => {
  return (
    <>
      <div className="form-overlay">
        <div className="form-design">
          <FormHeader handleForm={handleArticlePop} title={'Create Notice'} />
          <form>
            <CustomFormField name={'NoticeId'} label={'Notice Id'} placeholder={'Enter the Notice Id'} type={'text'} />
            <CustomFormField name={'Title'} label={'Title'} placeholder={'Enter the title of notice'} type={'text'} />
            <CustomFormField
              name={'Description'}
              label={'Description'}
              placeholder={'Enter the Notice Description'}
              type={'text'}
            />
            <div className="check-group">
              <p>Who is your notice directed to?</p>
              <div className="check-group-item">{getCheckboxOptions()}</div>
            </div>

            <CustomFormField label={'Date'} name={'date'} type={'date'} value={currentDate} />

            <ButtonGroup handleClose={handleArticlePop} />
          </form>
        </div>
      </div>
    </>
  );
};
export default AddNotice;
