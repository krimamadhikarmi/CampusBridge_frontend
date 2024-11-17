const CoursesTable = () => {
  return (
    <div className="data-present">
      <table className="data-table">
        <thead>
          <tr>
            <th>Courses</th>
            <th>Semester</th>
            <th>Activity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>SPM Course</td>
            <td>7th Semester</td>
            <td className="activity-button">
              <button className="view-button">View</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default CoursesTable;
