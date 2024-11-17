import PageHeader from '../../components/common/PageHeader';
import Navbar from '../../components/Navbar';
import '../../styles/College.css';

const Colleges = () => {
  return (
    <>
      <Navbar />
      <PageHeader pageTitle={'Colleges'} />
      <div className="college-box">
        <div className='college-button'>
          <button className="add-college-button">
            Add College
          </button>
        </div>
        <div className="college-present">
          <table className="college-table">
            <thead>
              <tr>
                <th>College Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Activity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Samriddhi College</td>
                <td>samriddhi@college.com</td>
                <td>samriddhi123</td>
                <td className="activity-button">
                  <button className="view-button">Edit</button>
                </td>
              </tr>
              <tr>
                <td>Samriddhi College</td>
                <td>samriddhi@college.com</td>
                <td>samriddhi123</td>
                <td className="activity-button">
                  <button className="view-button">Edit</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default Colleges;
