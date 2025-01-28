import { useState } from 'react';
import CloseButton from './common/CloseButton';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ConfirmPopup from './LogoutPopup';
import { useToken } from '../context/TokenContext';
import FormHeader from './common/FormHeader';
import CustomFormField from './customFormField';
import ButtonGroup from './common/ButtonGroup';

const ArticleList = ({
  headline,
  description,
  createdDate,
  updatedDate,
  author,
  aid,
  tagline,
  tag,
  handleDeletePop,
  deleteData,
  setDeleteData,
  handleDeleteData,
  selectArticelId,
  editForm,
  handleEdit,
  currentDate,
  handleUpdateForm,
}) => {
  const [articlepop, setArticlePop] = useState(false);
  const { id } = useToken();
  const [articleHeadline, setArticleHeadline] = useState(headline);
  const [articleTagline, setArticleTagline] = useState(tagline);
  const [articleDescription, setArticleDescription] = useState(description);
  const [dateUpdated, setDateUpdated] = useState(currentDate);

  const handleArticle = () => {
    setArticlePop(!articlepop);
  };

  const handleEditFormSubmit = (e) => {
    e.preventDefault();
    const updateArticle = {
      articleId: aid,
      creatorId: id,
      headline: articleHeadline,
      tagline: articleTagline,
      description: articleDescription,
      dateUpdated: new Date().toISOString(),
    };
    console.log(JSON.stringify(updateArticle));
    handleEdit();
    handleUpdateForm(updateArticle);
  };

  return (
    <>
      <div className="article-content">
        <h2 className="article-title" onClick={handleArticle} style={{ cursor: 'pointer' }}>
          {headline}
        </h2>
        <p className="article-description">{tagline}</p>
        {createdDate != updatedDate ? (
                <div className="article-info">
                  <span className="article-date">Date Posted: {createdDate.split('T')[0]}</span>
                  <span className="article-date">Date Upated: {updatedDate.split('T')[0]}</span>
                  <p className="author-name">By {author}</p>
                </div>
              ) : (
                <div className="article-info">
                  <span className="article-date">Date Created: {updatedDate.split('T')[0]}</span>
                  <p className="author-name">By {author}</p>
                </div>
              )}

        {author === id && (
          <div className="notice-options">
            <FontAwesomeIcon icon={faPenToSquare} className="fa-icon" onClick={handleEdit} />
            <FontAwesomeIcon icon={faTrash} className="fa-icon-trash" onClick={() => handleDeletePop(aid)} />
          </div>
        )}
      </div>

      {articlepop && (
        <div className="form-overlay">
          <div className="article-details-box">
            <CloseButton toggleBox={handleArticle} variant={'articlelist'} />
            <div className="article-details">
              <h2>{headline}</h2>
              {createdDate != updatedDate ? (
                <div className="article-info">
                  <span className="article-date">Date Posted: {createdDate.split('T')[0]}</span>
                  <span className="article-date">Date Upated: {updatedDate.split('T')[0]}</span>
                  <p className="author-name">By {author}</p>
                </div>
              ) : (
                <div className="article-info">
                  <span className="article-date">Date Created: {updatedDate.split('T')[0]}</span>
                  <p className="author-name">By {author}</p>
                </div>
              )}
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
            <form onSubmit={handleEditFormSubmit}>
              <CustomFormField label={'Tag'} name={'tag'} type={'text'} value={aid} disabled />
              <CustomFormField
                label={'Headline'}
                name={'headline'}
                type={'text'}
                value={articleHeadline}
                onChange={(e) => setArticleHeadline(e.target.value)}
              />
              <CustomFormField
                label={'Tagline'}
                name={'tagline'}
                type={'text'}
                value={tagline}
                onChange={(e) => setArticleTagline(e.target.value)}
              />
              <CustomFormField
                label={'Description'}
                name={'description'}
                type={'text'}
                value={articleDescription}
                onChange={(e) => setArticleDescription(e.target.value)}
              />

              <CustomFormField
                label={'Date'}
                name={'date'}
                type={'date'}
                value={dateUpdated}
                onChange={(e) => setDateUpdated(e.target.value)}
              />

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
