// import Navbar from '../components/Navbar';
// import PageHeader from '../components/PageHeader';
// import '../styles/Articles.css'

// const Articles = () => {
//   return (
//     <>
//       <Navbar />
//       <PageHeader pageTitle={'Articles'} />
//       <div className="article-box">
//         <div className='article-list'>
//             <div className='article-item'>
//                <div className='article-title'>Title</div>
//                <div className='article-image'>image</div>
//             </div>
//             <div className='article-bottom'>
//               <p className='author'>Krima Madhikarmi</p>
//               <p className='article-date'>13 June 2024</p>
//             </div>

//         </div>
//       </div>
//     </>
//   );
// };
// export default Articles;
import React from 'react';
import Navbar from '../components/Navbar';
import PageHeader from '../components/PageHeader';
import '../styles/Articles.css';

const Articles = () => {
  const articles = [
    {
      id: 1,
      title: '5 Amazing New JavaScript Features in ES15 (2024)',
      description: '5 juicy ES15 features with new functionality for cleaner and shorter JavaScript code in 2024.',
      author: 'Tari Ibaba',

      date: 'Jun 2',

      imageUrl: 'sports.jpeg',
    },
    {
      id: 2,
      title: 'React Native’s New Architecture: The Tricky Parts (2/2)',
      description: 'The first part ended with you implementing a custom Shadow component.',
      author: 'Jakub Piasecki',

      date: 'Jun 10',

      imageUrl: 'images.png',
    },
  ];

  return (
    <>
      <Navbar />
      <PageHeader pageTitle={'Articles'} />
      <div className="article-box">
        <div className="article-list">
          {articles.map((article) => (
            <div key={article.id} className="article-item">
              <div className="article-content">
                <h2 className="article-title">{article.title}</h2>
                <p className="article-description">{article.description}</p>
                <div className="article-info">
                  <span className="article-date">{article.date}</span>
                  <p className="author-name">{article.author}</p>
                </div>
              </div>
              <div className="article-image">
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Articles;
