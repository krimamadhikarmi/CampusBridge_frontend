import PageHeader from '../components/common/PageHeader';
import Navbar from '../components/Navbar';
import '../styles/Questions.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faComment,
  faCommentAlt,
  faCommentDollar,
  faComments,
  faCommentSms,
  faPenToSquare,
} from '@fortawesome/free-solid-svg-icons';

const QuestionPage = () => {
  return (
    <>
      <Navbar />
      <PageHeader pageTitle={'Questions'} />
      <div className="questions-box">
        <div className="question-list">
          <div className="question-item">
            <div className="question-content">
              <h2 className="question-title">What is Bsc.CSIT ?</h2>
              <div className="question-info">
                <span className="question-date">Date Posted:2025-01-12</span>
                <p className="posted-name">Krima Madhikarmi</p>
              </div>
              <div className="question-footer">
                <div className="question-answer">
                  <FontAwesomeIcon icon={faPenToSquare} />    Answer
                </div>
                <div className="question-comment">
                  <FontAwesomeIcon icon={faComment} size='10'/> 1
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default QuestionPage;
