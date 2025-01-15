import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

import AnswerPopup from './AnswerPopup';
import CommentPopUp from './CommentPopup';
const QuestionList = ({ question, date, postedby, comments }) => {
  const [answerpop, setAnswerPop] = useState(false);
  const [newAnswer, setAnswer] = useState('');
  const [displayedAnswer, setDisplayedAnswer] = useState([]);

  const [commentPop, setCommentPop] = useState(false);

  const handleAnswerPop = () => {
    setCommentPop(false)
    setAnswerPop(!answerpop);
  };

  const handleInputChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleSubmitAnswer = () => {
    if (newAnswer.trim() === '') {
      //this is to prevent empty answer
      return;
    }

    setDisplayedAnswer([
      ...displayedAnswer,
      { id: displayedAnswer.length + 1, answer: newAnswer, commenter: postedby },
    ]);

    setAnswer('');
  };

  const handleCommentPop = () => {
    setCommentPop(!commentPop);
  };

  return (
    <>
      <div className="question-content">
        <h2 className="question-title">{question}</h2>
        <div className="question-info">
          <span className="question-date">Date Posted:{date}</span>
          <p className="posted-name">{postedby}</p>
        </div>
        <div className="question-footer">
          <div className="question-answer" onClick={handleAnswerPop}>
            <FontAwesomeIcon icon={faPenToSquare} /> Answer
          </div>
          <div className="question-comment" onClick={handleCommentPop}>
            <FontAwesomeIcon icon={faComment} size="10" /> {comments.length}
          </div>
        </div>
      </div>

      {answerpop && (
        <div className="form-overlay">
         <AnswerPopup 
         handleAnswerPop={handleAnswerPop}
         question={question}
         date={date}
         postedby={postedby}
         displayedAnswer={displayedAnswer}
         newAnswer={newAnswer}
         handleInputChange={handleInputChange}
         handleSubmitAnswer={handleSubmitAnswer}
         />
        </div>
      )}

      {commentPop && (
        <div className="form-overlay">
         <CommentPopUp handleCommentPop={handleCommentPop} question={question}
         date={date}
         postedby={postedby}
         comments={comments}
         handleAnswerPop={handleAnswerPop}
         />
        </div>
      )}
    </>
  );
};
export default QuestionList;
