import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';

import ConfirmPopup from './LogoutPopup';
import EditNotice from './notice/EditNotice';
const NoticeList = ({
  index,
  nid,
  title,
  content,
  creator,
  role,
  date,
  getCheckboxOptions,
  handleDeletePop,
  deleteData,
  setDeleteData,
  handleDelete,
  selectNoticeId,
}) => {
  const [showEdit, setShowEdit] = useState(false);
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setCurrentDate(today);
  }, []);

  const handleEditForm = () => {
    setShowEdit(!showEdit);
  };

  return (
    <>
      <div className="notice-number">{index + 1}</div>
      <div className="notice-content">
        <p className="notice-title">{title}</p>
        <p className="notice-data">{content}</p>
        <div className="notice-bottom">
          <p className="notice-category">{creator} </p>
          <p className="notice-date">Date:{date.split('T')[0]}</p>
        </div>
      </div>

      {role[0] === creator && (
        <div className="notice-options">
          <FontAwesomeIcon icon={faPenToSquare} className="fa-icon" onClick={handleEditForm} />
          <FontAwesomeIcon icon={faTrash} className="fa-icon-trash" onClick={() => handleDeletePop(nid)} />
        </div>
      )}

      {showEdit && (
        <EditNotice
          handleEditForm={handleEditForm}
          id={nid}
          title={title}
          content={content}
          getCheckboxOptions={getCheckboxOptions}
          currentDate={currentDate}
        />
      )}

      {deleteData && (
        <ConfirmPopup
          onClose={() => setDeleteData(false)}
          onConfirm={() => handleDelete(selectNoticeId)}
          title={'Are you sure you want to delete ?'}
        />
      )}
    </>
  );
};
export default NoticeList;
