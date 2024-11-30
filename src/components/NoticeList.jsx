import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';

import ConfirmPopup from './LogoutPopup';
import EditNotice from './notice/EditNotice';
const NoticeList = ({ index, id, title, content, category, date, getCheckboxOptions, role }) => {
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
      {role === 'College' || role === 'University' || role === 'ClubHead' ? (
        <div className="notice-options">
          <FontAwesomeIcon icon={faPenToSquare} className="fa-icon" onClick={handleEditForm} />
          <FontAwesomeIcon icon={faTrash} className="fa-icon-trash" onClick={handleDeletePop} />
        </div>
      ) : null}

      {showEdit && (
        <EditNotice
          handleEditForm={handleEditForm}
          id={id}
          title={title}
          content={content}
          getCheckboxOptions={getCheckboxOptions}
          currentDate={currentDate}
        />
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
