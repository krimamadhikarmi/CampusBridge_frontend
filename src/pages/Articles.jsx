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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Articles = () => {
  const [dropdown, setDropDown] = useState(false);
  const [headline, setHeadLine] = useState('');
  const [description, setDescription] = useState('');
  const [tag, setTag] = useState('');
  const [tagline, setTagLine] = useState('');
  const [articles, setArticles] = useState([]);
  const [deleteData, setDeleteData] = useState(false);
  const [selectArticelId, setSelectArticleId] = useState(null);
  const [editForm, setEditForm] = useState(false);

  const [currentDate, setCurrentDate] = useState('');
  const { role, id } = useToken();

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
    event.preventDefault();
    const articleData = {
      articleId: tag,
      headline: headline,
      description: description,
      tagline: tagline,
      datePosted: currentDate,
    };

    //validating formdata
    console.log(JSON.stringify(articleData));
    console.log(id, 'id');

    try {
      const response = await axios.post(
        `https://localhost:7276/api/Article/CreateArticle/${id}`,
        JSON.stringify(articleData),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      setHeadLine('');
      setDescription('');
      setTag('');
      setTagLine('');
      console.log('article', response.data);
      toast.success('Article created successfully!', {
        style: {
          backgroundColor: '#004d4d',
          color: '#ffffff',
        },
      });
      setDropDown(false);
      setArticles((prevArticles) => [...prevArticles, response.data]);
    } catch (e) {
      setHeadLine('');
      setDescription('');
      setTag('');
      setTagLine('');
      console.log(e);
      setDropDown(false);
      toast.error('Failed to create article. Please try again!');
    }
  };

  const handleEdit = () => {
    setEditForm(!editForm);
  };

  const handleUpdateForm = async (updateArticle) => {
    const formData = {
      articleId: updateArticle.articleId,
      creatorId: updateArticle.creatorId,
      headline: updateArticle.headline,
      tagline: updateArticle.tagline,
      description: updateArticle.description,
      dateUpdated: updateArticle.dateUpdated,
    };
    console.log(JSON.stringify(formData));
    try {
      const response = await axios.put(
        `https://localhost:7276/api/Article/UpdateArticle/${formData.articleId}/${id}`,
        JSON.stringify(formData),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      console.log('Resonse', response.data);
      setArticles((prevArticles) =>
        prevArticles.map((article) =>
          article.articleId === formData.articleId ? { ...article, ...response.data } : article,
        ),
      );
      setDropDown(false);
    } catch (e) {
      console.log(e);
    }
  };

  const handleDeletePop = (aid) => {
    console.log(aid, 'aid');
    setSelectArticleId(aid);
    setDeleteData(true);
  };

  const handleDeleteData = async (aid) => {
    try {
      const response = await axios.delete(`https://localhost:7276/api/Article/DeleteArticle/${aid}/${id}`);
      console.log(response.data);
      setArticles((prevArticles) => prevArticles.filter((article) => article.articleId !== aid));
      setDeleteData(false);
      toast.success('Article deleted successfully!', {
        style: {
          backgroundColor: '#004d4d',
          color: '#ffffff',
        },
      });
    } catch (e) {
      console.error('Error deleting course:', e);
      toast.error('Failed to delete article. Please try again!');
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

  return (
    <>
      <Navbar />

      <PageHeader pageTitle={'Articles'} />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeButton={false}
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)', 
          zIndex: 9999, 
        }}
      />
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
                createdDate={article.datePosted}
                updatedDate={article.dateUpdated}
                author={article.creatorId}
                aid={article.articleId}
                description={article.description}
                handleDeletePop={handleDeletePop}
                deleteData={deleteData}
                setDeleteData={setDeleteData}
                handleDeleteData={handleDeleteData}
                selectArticelId={selectArticelId}
                handleEdit={handleEdit}
                editForm={editForm}
                currentDate={currentDate}
                handleDescription={handleDescription}
                handleTag={handleTag}
                handleTagLine={handleTagLine}
                handleTitle={handleTitle}
                setHeadLine={setHeadLine}
                handleUpdateForm={handleUpdateForm}
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
