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
