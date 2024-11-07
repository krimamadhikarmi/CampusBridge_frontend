const AssignmentTab = () => {
  return (
    <div className="tab-style">
      <h1 className="assignment-heading">Assignment Tab</h1>
      <div className="assignment-present">
        <table className="assignment-table">
          <thead>
            <tr>
              <th>Assignments</th>
              <th>Activity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>SPM Assignment</td>
              <td className="activity-buttons">
                <button className="view-button">View</button>
                <button className="download-button">Download</button>
              </td>
            </tr>
            <tr>
              <td>SPM Assignment</td>
              <td className="activity-buttons">
                <button className="view-button">View</button>
                <button className="download-button">Download</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default AssignmentTab;
