import { useState } from 'react';
import CloseButton from './common/CloseButton';

const ArticleList = ({ headline, description, date, author, id, tagline }) => {
  const [articlepop, setArticlePop] = useState(false);

  const handleArticle = () => {
    setArticlePop(!articlepop);
  };

  return (
    <>
      <div className="article-content" onClick={handleArticle} style={{ cursor: 'pointer' }}>
        <h2 className="article-title">{headline}</h2>
        <p className="article-description">{tagline}</p>
        <div className="article-info">
          <span className="article-date">DatePosted: {date.split('T')[0]}</span>
          <p className="author-name">{author}</p>
        </div>
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
    </>
  );
};
export default ArticleList;
