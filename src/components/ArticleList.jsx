import { useState } from 'react';
import CloseButton from './common/CloseButton';

const ArticleList = ({ headline, description, date, author, imageUrl, id, tagline }) => {

  const [articlepop, setArticlePop] = useState(false);

  const handleArticle = () => {
    setArticlePop(!articlepop);
  };

  return (
    <>
      <div className="article-content" style={{ cursor: 'pointer' }} onClick={handleArticle}>
        <h2 className="article-title">{headline}</h2>
        <p className="article-description">{tagline}</p>
        <div className="article-info">
          <span className="article-date">DatePosted:{date}</span>
          <p className="author-name">{author}</p>
        </div>
      </div>
      {/* <div className="article-image">
        <img src={imageUrl} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div> */}

      {articlepop && (
        <div className="form-overlay">
          <div className="article-details-box">
            <CloseButton toggleBox={handleArticle} variant={'articlelist'} />
            <div className="article-details">
              <h2>{headline}</h2>
              <div className="article-info">
                <span className="article-date">{date}</span>
                <p className="author-name">By {author}</p>
              </div>
              <p>{description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default ArticleList;
