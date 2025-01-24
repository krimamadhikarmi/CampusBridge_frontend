import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import PageHeader from '../components/common/PageHeader';
import '../styles/Articles.css';
import ArticleList from '../components/ArticleList';
import CustomFormField from '../components/customFormField';
import ButtonGroup from '../components/common/ButtonGroup';
import FormHeader from '../components/common/FormHeader';
import { useToken } from '../context/TokenContext';
import axios from 'axios';

const Articles = () => {
  const [dropdown, setDropDown] = useState(false);
  const [headline, setHeadLine] = useState('');
  const [description, setDescription] = useState('');
  const [tag, setTag] = useState('');
  const [tagline, setTagLine] = useState('');
  const [articles, setArticles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  const [currentDate, setCurrentDate] = useState('');
  const { role, id } = useToken();
  const authorName = 'Krima Madhikarmi'; //fetch from api

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setCurrentDate(today);
    const fetchArticle = async () => {
      try {
        const response = await axios.get('https://localhost:7276/api/Article/GetArticle');
        console.log('articles', response.data);
        setArticles(response.data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchArticle();
  }, []);

  const toggleDown = () => {
    setDropDown(!dropdown);
  };

  const handleSubmit = async (event) => {
    // event.preventDefault();
    const formData = new FormData();
    formData.append('tag', tag);
    formData.append('headline', headline);
    formData.append('description', description);
    formData.append('tagline', tagline);
    formData.append('datePosted', currentDate);

    if (selectedFile) {
      formData.append('image', selectedFile);
    }

    //validating formdata
    console.log(JSON.stringify(formData));
    console.log(id, 'id');

    for (let pair of formData.entries()) {
      console.log(`${pair[0]}:`, pair[1]);
    }

    try {
      const response = await axios.post(
        `https://localhost:7276/api/Article/CreateArticle/${id}`,
        JSON.stringify(formData),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      console.log('article', response.data);
    } catch (e) {
      console.log(e);
    }
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

  // const articles = [
  //   {
  //     id: 1,
  //     headline: '5 Amazing New JavaScript Features in ES15 (2024)',
  //     tagline: '5 juicy ES15 features with new functionality for cleaner and shorter JavaScript code in 2024.',
  //     description:
  //       '5 juicy ES15 features with new functionality for cleaner and shorter JavaScript code in 2024.5 juicy ES15 features with new functionality for cleaner and shorter JavaScript code in 2024.5 juicy ES15 features with new functionality for cleaner and shorter JavaScript code in 2024.5 juicy ES15 features with new functionality for cleaner and shorter JavaScript code in 2024.5 juicy ES15 features with new functionality for cleaner and shorter JavaScript code in 2024.5 juicy ES15 features with new functionality for cleaner and shorter JavaScript code in 2024.5 juicy ES15 features with new functionality for cleaner and shorter JavaScript code in 2024.',
  //     author: 'Tari Ibaba',
  //     datePosted: '2024-04-18',
  //     imageUrl: 'sports.jpeg',
  //   },
  //   {
  //     id: 2,
  //     headline: 'React Native’s New Architecture: The Tricky Parts (2/2)',
  //     tagline: 'The first part ended with you implementing a custom Shadow component.',
  //     author: 'Jakub Piasecki',
  //     datePosted: '2024-04-18',
  //     imageUrl: 'images.png',
  //     description:
  //       '5 juicy ES15 features with new functionality for cleaner and shorter JavaScript code in 2024.5 juicy ES15 features with new functionality for cleaner and shorter JavaScript code in 2024.5 juicy ES15 features with new functionality for cleaner and shorter JavaScript code in 2024.5 juicy ES15 features with new functionality for cleaner and shorter JavaScript code in 2024.5 juicy ES15 features with new functionality for cleaner and shorter JavaScript code in 2024.5 juicy ES15 features with new functionality for cleaner and shorter JavaScript code in 2024.5 juicy ES15 features with new functionality for cleaner and shorter JavaScript code in 2024.',
  //   },
  // ];

  return (
    <>
      <Navbar />
      <PageHeader pageTitle={'Articles'} />
      {/* {console.log(role)} */}
      <div className="article-box">
        <div className="article-form">
          {role.includes('Teacher') ||
          role.includes('University') ||
          role.includes('College') ||
          role.includes('ClubHead') ? (
            <button className="article-button" onClick={toggleDown}>
              Add article
            </button>
          ) : null}
        </div>
        <div className="article-list">
          {articles.map((article) => (
            <div key={article.id} className="article-item">
              <ArticleList
                headline={article.headline}
                tagline={article.tagline}
                date={article.datePosted}
                author={article.CreatorId}
                id={article.id}
                description={article.description}
                imageUrl={article.imageUrl}
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
                value={tagline}
                onChange={handleTagLine}
              />
              <CustomFormField
                label={'Description'}
                name={'description'}
                type={'text'}
                value={description}
                onChange={handleDescription}
              />
              <CustomFormField
                label={'Image'}
                name={'image'}
                type={'file'}
                // value={description}
                onChange={(e) => setSelectedFile(e.target.files[0])}
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
