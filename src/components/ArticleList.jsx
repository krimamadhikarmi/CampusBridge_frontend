import { useState } from 'react';
import CloseButton from './common/CloseButton';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ConfirmPopup from './LogoutPopup';
import { useToken } from '../context/TokenContext';
import axios from 'axios';
import FormHeader from './common/FormHeader';
import CustomFormField from './customFormField';
import ButtonGroup from './common/ButtonGroup';
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
  editForm,
  handleEdit,
  currentDate,
  toggleDown,
  handleTitle,
  handleTagLine,
  handleTag,
  handleDescription,
  setHeadLine,
}) => {
  const [articlepop, setArticlePop] = useState(false);
  const { id } = useToken();
  const [articleHeadline, setArticleHeadline] = useState(headline);
  const [articleTag, setArticleTag] = useState(tagline);
  const [articleDescription, setArticleDescription] = useState(description);
  const [dateUpdated, setDateUpdated] = useState(currentDate);

  const handleArticle = () => {
    setArticlePop(!articlepop);
  };

  const handleEditFormSubmit = (e, aid) => {
    e.preventDefault();
    const updateArticle = {};
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
            <FontAwesomeIcon icon={faPenToSquare} className="fa-icon" onClick={handleEdit} />
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
      {editForm && (
        <div className="form-overlay">
          <div className="form-design">
            <FormHeader title={'Edit Article'} handleForm={handleEdit} />
            <form>
              <CustomFormField
                label={'Tag'}
                name={'tag'}
                type={'text'}
                value={tagline}
                onChange={(e) => handleTag(e)}
              />
              <CustomFormField
                label={'Headline'}
                name={'headline'}
                type={'text'}
                value={headline}
                onChange={(e) => setHeadLine(e.target.value)}
              />
              <CustomFormField
                label={'Tagline'}
                name={'tagline'}
                type={'text'}
                value={tagline}
                onChange={(e) => handleTagLine(e)}
              />
              <CustomFormField
                label={'Description'}
                name={'description'}
                type={'text'}
                value={description}
                onChange={(e) => handleDescription(e)}
              />

              <CustomFormField label={'Date'} name={'date'} type={'date'} value={date.split('T')[0]} />

              <ButtonGroup handleClose={handleEdit} />
            </form>
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
