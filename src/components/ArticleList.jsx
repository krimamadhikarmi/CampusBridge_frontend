const ArticleList = ({ title, description, date, author, imageUrl }) => {
  return (
    <>
      <div className="article-content">
        <h2 className="article-title">{title}</h2>
        <p className="article-description">{description}</p>
        <div className="article-info">
          <span className="article-date">{date}</span>
          <p className="author-name">{author}</p>
        </div>
      </div>
      <div className="article-image">
        <img src={imageUrl} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
    </>
  );
};
export default ArticleList;
