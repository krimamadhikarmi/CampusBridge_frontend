import Navbar from '../components/Navbar';
import PageHeader from '../components/PageHeader';
import '../styles/Notices.css';

const Notices = () => {
  return (
    <>
      <Navbar />
      <PageHeader pageTitle={'Notices'} />
      <div className="notice-box">
        <div className="choice-box">
          <button>All</button>
          <button>College</button>
          <button>TU</button>
        </div>
        <div className="notice-list">
          <div className="notice-item">
            <div className="notice-number">1</div>
            <div className="notice-content">
              <p className="notice-title">Classes Rescheduled</p>
              <div className="notice-bottom">
                <p className="notice-category">College </p>
                <p className="notice-date">Date: 2081-08-08</p>
              </div>
            </div>
          </div>
          <div className="notice-item">
            <div className="notice-number">2</div>
            <div className="notice-content">
              <p className="notice-title">BSc Exam Schedule</p>
              <div className="notice-bottom">
                <p className="notice-category">University </p>
                <p className="notice-date">Date: 2081-08-08</p>
              </div>
            </div>
          </div>
          <div className="notice-item">
            <div className="notice-number">3</div>
            <div className="notice-content">
              <p className="notice-title">BSc Exam Schedule</p>
              <div className="notice-bottom">
                <p className="notice-category">University </p>
                <p className="notice-date">Date: 2081-08-08</p>
              </div>
            </div>
          </div>
          <div className="notice-item">
            <div className="notice-number">4</div>
            <div className="notice-content">
              <p className="notice-title">BSc Exam Schedule</p>
              <div className="notice-bottom">
                <p className="notice-category">University </p>
                <p className="notice-date">Date: 2081-08-08</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notices;
