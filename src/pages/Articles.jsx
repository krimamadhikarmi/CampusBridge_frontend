import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import PageHeader from '../components/common/PageHeader';
import '../styles/Articles.css';
import ArticleList from '../components/ArticleList';
import CustomFormField from '../components/customFormField';
import ButtonGroup from '../components/common/ButtonGroup';
import FormHeader from '../components/common/FormHeader';
import { useToken } from '../context/TokenContext';

const Articles = () => {
  const [dropdown, setDropDown] = useState(false);
  const [headline, setHeadLine] = useState('');
  const [description, setDescription] = useState('');
  const [tag, setTag] = useState('');
  const [tagLine, setTagLine] = useState('');

  const [currentDate, setCurrentDate] = useState('');
  const { role } = useToken();

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setCurrentDate(today);
  }, []);

  const toggleDown = () => {
    setDropDown(!dropdown);
  };

  const handleSubmit = () => {
    console.log('title', headline);
    console.log('description', description);
    console.log('tag', tag);
    console.log('tagline', tagLine);
    console.log('date', currentDate);
  };

  const handleTag = (event) => {
    setTag(event.target.value);
  };

  const handleTitle = (event) => {
    setHeadLine(event.target.value);
  };
  const handleTagLine = (event) => {
    setTagLine(event.target.value);
  };
  const handleDescription = (event) => {
    setDescription(event.target.value);
  };

  const articles = [
    {
      id: 1,
      title: '5 Amazing New JavaScript Features in ES15 (2024)',
      tagline: '5 juicy ES15 features with new functionality for cleaner and shorter JavaScript code in 2024.',
      description:
        '5 juicy ES15 features with new functionality for cleaner and shorter JavaScript code in 2024.5 juicy ES15 features with new functionality for cleaner and shorter JavaScript code in 2024.5 juicy ES15 features with new functionality for cleaner and shorter JavaScript code in 2024.5 juicy ES15 features with new functionality for cleaner and shorter JavaScript code in 2024.5 juicy ES15 features with new functionality for cleaner and shorter JavaScript code in 2024.5 juicy ES15 features with new functionality for cleaner and shorter JavaScript code in 2024.5 juicy ES15 features with new functionality for cleaner and shorter JavaScript code in 2024.',
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
        <div className="article-form">
          {role === 'Editor' && (
            <button className="article-button" onClick={toggleDown}>
              Add article
            </button>
          )}
        </div>
        <div className="article-list">
          {articles.map((article) => (
            <div key={article.id} className="article-item">
              <ArticleList
                title={article.title}
                tagline={article.tagline}
                date={article.date}
                author={article.author}
                id={article.id}
                description={article.description}
                // imageUrl={article.imageUrl}
              />
            </div>
          ))}
        </div>
      </div>
      {dropdown && (
        <div className="form-overlay">
          <div className="form-design">
            <FormHeader handleForm={toggleDown} title={'Create Article'} />
            <form onSubmit={handleSubmit}>
              <CustomFormField label={'Tag'} name={'tag'} type={'text'} value={tag} onChange={handleTag} />
              <CustomFormField
                label={'Headline'}
                name={'headline'}
                type={'text'}
                value={headline}
                onChange={handleTitle}
              />
              <CustomFormField
                label={'Tagline'}
                name={'tagline'}
                type={'text'}
                value={tagLine}
                onChange={handleTagLine}
              />
              <CustomFormField
                label={'Description'}
                name={'description'}
                type={'text'}
                value={description}
                onChange={handleDescription}
              />
              <CustomFormField label={'Date'} name={'date'} type={'date'} value={currentDate} />

              <ButtonGroup handleClose={toggleDown} />
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Articles;
