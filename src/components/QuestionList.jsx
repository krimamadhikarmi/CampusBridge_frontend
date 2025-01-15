import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import CloseButton from './common/CloseButton';
import CustomFormField from './customFormField';
const QuestionList = ({ question, date, postedby, comments }) => {
  const [answerpop, setAnswerPop] = useState(false);
  const [newAnswer, setAnswer] = useState('');
  const [displayedAnswer, setDisplayedAnswer] = useState([]);

  const [commentPop, setCommentPop] = useState(false);

  const handleAnswerPop = () => {
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
          <div className="answer-details-box">
            <CloseButton toggleBox={handleAnswerPop} variant={'answer'} />
            <div className="question-content">
              <h2 className="answer-title">{question}</h2>
              <div className="question-info">
                <span className="question-date">Date Posted:{date}</span>
                <p className="posted-name">{postedby}</p>
              </div>
            </div>
            <div className="answer-details">
              <div className="answer-display">
                {displayedAnswer.map((answer) => (
                  <div className="answer-item" key={answer.id}>
                    <p className="commenter-name">
                      <strong>{answer.commenter}:</strong>
                    </p>
                    <p className="comment-text">{answer.answer}</p>
                  </div>
                ))}
              </div>
              <div className="answer-form">
                <CustomFormField
                  name={'answer'}
                  placeholder={'Enter your answer.....'}
                  onChange={handleInputChange}
                  value={newAnswer}
                />
                <div>
                  <button type="button" className="answer-submit-button" onClick={handleSubmitAnswer}>
                    Enter
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {commentPop && (
        <div className="form-overlay">
          <div className="comment-details-box">
            <CloseButton toggleBox={handleCommentPop} variant={'comment'} />
            <div className="question-content">
              <h2 className="answer-title">{question}</h2>
              <div className="question-info">
                <span className="question-date">Date Posted:{date}</span>
                <p className="posted-name">{postedby}</p>
              </div>
              <div className="comment-display">
                <h2>Answers</h2>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default QuestionList;
