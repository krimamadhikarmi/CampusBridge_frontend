import FormHeader from '../common/FormHeader';
import CustomFormField from '../customFormField';
import ButtonGroup from '../common/ButtonGroup';
import { useState } from 'react';
const AddNotice = ({ handleArticlePop, currentDate, getCheckboxOptions, handleSubmit }) => {
  const [noticeId, setNoticeId] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [datePosted, setDatePosted] = useState('');
  const [directedTo, setDirectedTo] = useState([]);

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setDirectedTo((prev) => (checked ? [...prev, value] : prev.filter((item) => item !== value)));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = {
      noticeId,
      title,
      description,
      datePosted,
      directedTo:directedTo,
    };
    handleSubmit(formData);
  };
  return (
    <>
      <div className="form-overlay">
        <div className="form-design">
          <FormHeader handleForm={handleArticlePop} title={'Create Notice'} />
          <form onSubmit={handleFormSubmit}>
            <CustomFormField
              name={'NoticeId'}
              label={'Notice Id'}
              placeholder={'Enter the Notice Id'}
              type={'text'}
              onChange={(e) => setNoticeId(e.target.value)}
            />
            <CustomFormField
              name={'Title'}
              label={'Title'}
              placeholder={'Enter the title of notice'}
              type={'text'}
              onChange={(e) => setTitle(e.target.value)}
            />
            <CustomFormField
              name={'Description'}
              label={'Description'}
              placeholder={'Enter the Notice Description'}
              type={'text'}
              onChange={(e) => setDescription(e.target.value)}
            />
            <div className="check-group">
              <p>Who is your notice directed to?</p>
              <div className="check-group-item">{getCheckboxOptions(handleCheckboxChange)}</div>
            </div>

            <CustomFormField
              label={'Date'}
              name={'date'}
              type={'date'}
              value={datePosted}
              onChange={(e) => setDatePosted(e.target.value)}
            />

            <ButtonGroup handleClose={handleArticlePop} />
          </form>
        </div>
      </div>
    </>
  );
};
export default AddNotice;
