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
  createdDate,
  updatedDate,
  getCheckboxOptions,
  handleDeletePop,
  deleteData,
  setDeleteData,
  handleDelete,
  selectNoticeId,
  handleUpdateForm,
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
          <span className="notice-category">{creator} </span>
          {createdDate !== updatedDate ? (
                <div>
                  <span className="article-date">Date Posted: {createdDate.split('T')[0]}</span>
                  <span className="article-date">Date Upated: {updatedDate.split('T')[0]}</span>
                </div>
              ) : (
                <div>
                  <span className="article-date">Date Created: {updatedDate.split('T')[0]}</span>
                </div>
              )}

        </div>
      </div>

      {role.includes(creator) && (
        <div className="notice-options">
          <FontAwesomeIcon icon={faPenToSquare} className="fa-icon" onClick={handleEditForm} />
          <FontAwesomeIcon icon={faTrash} className="fa-icon-trash" onClick={() => handleDeletePop(nid)} />
        </div>
      )}

      {showEdit && (
        <EditNotice
          handleEditForm={handleEditForm}
          nid={nid}
          title={title}
          content={content}
          getCheckboxOptions={getCheckboxOptions}
          currentDate={currentDate}
          handleUpdateForm={handleUpdateForm}
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
