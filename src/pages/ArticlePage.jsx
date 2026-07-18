import { useLocation } from 'react-router-dom';

const ArticleDetails = () => {
  const location = useLocation();
  console.log('location.state:', location.state); // Check the logged output

  const { title, description, date, author } = location.state || {};

  return (
    <>
      {/* <Navbar /> */}
      <div className="article-details">
        <h1>{title}</h1>
        <p>{description}</p>
        <p>
          By {author} on {date}
        </p>
      </div>
    </>
  );
};

export default ArticleDetails;
