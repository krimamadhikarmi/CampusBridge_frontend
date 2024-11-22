import { faBucket, faDeleteLeft, faEllipsisVertical, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const NoticeList = ({ index, title, content, category, date }) => {
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
        <FontAwesomeIcon icon={faPenToSquare} className="fa-icon" />
        <FontAwesomeIcon icon={faTrash} className="fa-icon-trash" />
      </div>
    </>
  );
};
export default NoticeList;
