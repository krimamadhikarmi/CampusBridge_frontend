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
        <div className="result-info">
          <p> Note: One Credit Hour equals 32 Clock Hours </p>
          <p>TH: THEORY </p>
          <p>PR: PRACTICAL </p>
          <p>Abs: ABSENT </p>
          <p> W: WITHHELD </p>
          <p>
            This sheet is for general ideas of grade(s) you secured.This is not for official appear. If any mistakes
            appear; record at respective college administration or University will be refered.
          </p>
        </div>
        <div className="result-type">
          <select>
            <option>Assessment </option>
            <option>Mid Term</option>
            <option>Pre-Board</option>
            <option>Board</option>
          </select>
        </div>
        {hasResult ? (
          <div className="result-present">
            <table className="result-table">
              <thead>
                <tr>
                  <th>Examination</th>
                  <th>Semester</th>
                  <th>Result</th>
                  <th>Percentage</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mid Term</td>
                  <td>7th Semester</td>
                  <td>Passed</td>
                  <td>70%</td>
                  <td>
                    <button className="view-button">View</button>
                  </td>
                </tr>
                <tr>
                  <td>Mid Term</td>
                  <td>7th Semester</td>
                  <td>Passed</td>
                  <td>70%</td>
                  <td>
                    <button className="view-button">View</button>
                  </td>
                </tr>
              </tbody>
            </table>
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
