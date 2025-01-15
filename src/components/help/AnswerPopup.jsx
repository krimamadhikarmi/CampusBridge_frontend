import CloseButton from '../common/CloseButton';
import CustomFormField from '../customFormField';
const AnswerPopup = ({
  handleAnswerPop,
  question,
  date,
  postedby,
  displayedAnswer,
  handleInputChange,
  handleSubmitAnswer,
  newAnswer,
}) => {
  return (
    <>
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
    </>
  );
};
export default AnswerPopup;