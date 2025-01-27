import { useState } from 'react';
import CloseButton from './common/CloseButton';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ConfirmPopup from './LogoutPopup';
import { useToken } from '../context/TokenContext';
import axios from 'axios';
const ArticleList = ({
  headline,
  description,
  date,
  author,
  cid,
  tagline,
  handleDeletePop,
  deleteData,
  setDeleteData,
  handleDeleteData,
  selectArticelId,
}) => {
  const [articlepop, setArticlePop] = useState(false);
  const { id } = useToken();

  const handleArticle = () => {
    setArticlePop(!articlepop);
  };

  return (
    <>
      <div className="article-content">
        <h2 className="article-title" onClick={handleArticle} style={{ cursor: 'pointer' }}>
          {headline}
        </h2>
        <p className="article-description">{tagline}</p>
        <div className="article-info">
          <span className="article-date">DatePosted: {date.split('T')[0]}</span>
          <p className="author-name">{author}</p>
        </div>

        {author === id && (
          <div className="notice-options">
            <FontAwesomeIcon icon={faPenToSquare} className="fa-icon" />
            <FontAwesomeIcon icon={faTrash} className="fa-icon-trash" onClick={() => handleDeletePop(cid)} />
          </div>
        )}
      </div>

      {articlepop && (
        <div className="form-overlay">
          <div className="article-details-box">
            <CloseButton toggleBox={handleArticle} variant={'articlelist'} />
            <div className="article-details">
              <h2>{headline}</h2>
              <div className="article-info">
                <span className="article-date">Date Posted: {date.split('T')[0]}</span>
                <p className="author-name">By {author}</p>
              </div>
              {/* <div className="article-image-wrapper">
                <img src={imageUrl} alt={headline} className="article-popup-image" />
              </div> */}
              <p>{description}</p>
            </div>
          </div>
        </div>
      )}
      {deleteData && (
        <ConfirmPopup
          onClose={() => setDeleteData(false)}
          onConfirm={() => handleDeleteData(selectArticelId)}
          title={'Are you sure you want to delete ?'}
        />
      )}
    </>
  );
};
export default ArticleList;
