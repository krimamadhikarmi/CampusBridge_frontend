import React from 'react';
import Navbar from '../components/Navbar';
import PageHeader from '../components/PageHeader';
import '../styles/Articles.css';
import ArticleList from '../components/ArticleList';

const Articles = () => {
  //created a fake api for testing purpose
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
              <ArticleList
                title={article.title}
                description={article.description}
                date={article.date}
                author={article.author}
                imageUrl={article.imageUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Articles;
