const AssignmentTable = () => {
  return (
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
  );
};
export default AssignmentTable;
