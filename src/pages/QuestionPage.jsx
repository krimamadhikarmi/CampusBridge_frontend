import PageHeader from '../components/common/PageHeader';
import Navbar from '../components/Navbar';
import QuestionList from '../components/help/QuestionList';
import '../styles/Questions.css';

const QuestionPage = () => {
  const questions = [
    {
      id: 1,
      question: 'What is csit?',
      date: ' 2025-01-04',
      postedby: 'Krima Madhikarmi',
      comments: [
        {
          id: 1,
          answer: 'It is a subject of computer science',
          commenter: 'Ram Shrestha',
        },
        {
          id: 2,
          answer: 'It is a subject of computer science',
          commenter: 'Hari Shrestha',
        },
        {
          id: 3,
          answer: 'It is a subject of computer science',
          commenter: 'Ram Madhi',
        },
      ],
    },
    {
      id: 1,
      question: 'What is bca?',
      date: ' 2025-01-12',
      postedby: 'Shishant Shrestha',
      comments: [
        {
          id: 1,
          answer: 'It is a subject of computer',
          commenter: 'Ram Shrestha',
        },
        {
          id: 2,
          answer: 'It is a subject of computer science',
          commenter: 'Hari Shrestha',
        },
      ],
    },
    {
      id: 1,
      question: 'What is it?',
      date: ' 2025-01-03',
      postedby: 'Sarina Shrestha',
      comments: [
        {
          id: 1,
          answer: 'It is a subject of information technology',
          commenter: 'Ram Shrestha',
        },
        {
          id: 2,
          answer: 'It is a subject of computer science',
          commenter: 'Hari Shrestha',
        },
        {
          id: 3,
          answer: 'It is a subject of computer science',
          commenter: 'Ram Madhi',
        },
        {
          id: 4,
          answer: 'It is a subject of computer science',
          commenter: 'Ram Madhi',
        },
      ],
    },
  ];
  return (
    <>
      <Navbar />
      <PageHeader pageTitle={'Questions'} />
      <div className="questions-box">
        <div className="question-list">
          {questions.map((question) => (
            <div className="question-item" key={question.id}>
              <QuestionList
                question={question.question}
                date={question.date}
                postedby={question.postedby}
                comments={question.comments}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default QuestionPage;
