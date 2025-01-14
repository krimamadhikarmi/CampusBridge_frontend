import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
const QuestionList = ({question,date,postedby,comments}) => {
  return (
    <>
      <div className="question-content">
        <h2 className="question-title">{question}</h2>
        <div className="question-info">
          <span className="question-date">Date Posted:{date}</span>
          <p className="posted-name">{postedby}</p>
        </div>
        <div className="question-footer">
          <div className="question-answer">
            <FontAwesomeIcon icon={faPenToSquare} /> Answer
          </div>
          <div className="question-comment">
            <FontAwesomeIcon icon={faComment} size="10" /> {comments.length}
          </div>
        </div>
      </div>
    </>
  );
};
export default QuestionList;