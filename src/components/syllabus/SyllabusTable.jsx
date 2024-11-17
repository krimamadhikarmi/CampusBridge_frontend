const SyllabusTable = ({ handleViewClick }) => {
  return (
    <div className="data-present">
      <table className="data-table">
        <thead>
          <tr>
            <th>Syllabus</th>
            <th>Activity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>7th Semester</td>
            <td>
              <div className="activity-button">
                <button className="view-button" onClick={handleViewClick}>
                  View
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default SyllabusTable;
