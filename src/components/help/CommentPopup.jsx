import CloseButton from '../common/CloseButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
const CommentPopUp = ({ handleCommentPop, question, date, postedby, comments, handleAnswerPop }) => {
  return (
    <>
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
            {comments.map((comment) => {
              return (
                <div className="comment-item">
                  <span className="commenter-name">{comment.commenter}</span>
                  <p className="commenter-text">{comment.answer}</p>
                </div>
              );
            })}
          </div>
          <div className="comment-footer">
            <p className="answer-footer">Do you want to answer?</p>
            <div className="question-answer" onClick={handleAnswerPop}>
              <FontAwesomeIcon icon={faPenToSquare} /> Answer
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CommentPopUp;
