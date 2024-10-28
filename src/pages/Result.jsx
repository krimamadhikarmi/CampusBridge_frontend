import Navbar from '../components/Navbar';
import PageHeader from '../components/PageHeader';
import '../styles/Result.css';

const Result = () => {
  const hasResult = true;

  return (
    <>
      <Navbar />
      <PageHeader pageTitle={'Result'} />
      <div className="result-box">
        {hasResult ? (
          <div className="result-present">
            <div className="info-box">
              <p className="label">Name</p>
              <p className="value">Krima Madhikarmi</p>
            </div>
            <div className="info-box">
              <p className="label">Semester</p>
              <p className="value">7th Semester</p>
            </div>
            <div className="info-box">
              <p className="label">Result</p>
              <p className="value">Passed</p>
            </div>
            <div className="info-box">
              <p className="label">Percentage</p>
              <p className="value">70%</p>
            </div>
            <button className="view-button">View</button>
          </div>
        ) : (
          <div className="no-result">
            <div className="icon">📄</div>
            <p>No published result</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Result;
