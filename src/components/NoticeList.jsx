import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';
import FormHeader from './common/FormHeader';
import ButtonGroup from './common/ButtonGroup';
import CustomFormField from './customFormField';
import ConfirmPopup from './LogoutPopup';
const NoticeList = ({ index, id, title, content, category, date, getCheckboxOptions }) => {
  const [showEdit, setShowEdit] = useState(false);
  const [currentDate, setCurrentDate] = useState('');
  const [deletepop, setDeletePop] = useState(false);

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setCurrentDate(today);
  }, []);

  const handleEditForm = () => {
    setShowEdit(!showEdit);
  };

  const handleDeletePop = () => {
    setDeletePop(!deletepop);
  };

  return (
    <>
      <div className="notice-number">{index + 1}</div>
      <div className="notice-content">
        <p className="notice-title">{title}</p>
        <p className="notice-data">{content}</p>
        <div className="notice-bottom">
          <p className="notice-category">{category} </p>
          <p className="notice-date">Date:{date}</p>
        </div>
      </div>
      <div className="notice-options">
        <FontAwesomeIcon icon={faPenToSquare} className="fa-icon" onClick={handleEditForm} />
        <FontAwesomeIcon icon={faTrash} className="fa-icon-trash" onClick={handleDeletePop} />
      </div>

      {showEdit && (
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
      )}

      {deletepop && (
        <ConfirmPopup
          onClose={handleDeletePop}
          onConfirm={handleDeletePop}
          title={'Are you sure you want to delete ?'}
        />
      )}
    </>
  );
};
export default NoticeList;
