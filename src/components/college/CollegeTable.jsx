const CollegeTable = () => {
  return (
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
            <button className="delete-button">Delete</button>
          </td>
        </tr>
        <tr>
          <td>Samriddhi College</td>
          <td>samriddhi@college.com</td>
          <td>samriddhi123</td>
          <td className="activity-button">
            <button className="view-button">Edit</button>
            <button className="delete-button">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
export default CollegeTable;
