const AttendanceTab = () => {
  const monthsData = [
    { month: 'Baishak', operatingDays: 14, presentDays: 9 },
    { month: 'Jestha', operatingDays: 23, presentDays: 20 },
    { month: 'Ashad', operatingDays: 23, presentDays: 23 },
  ];
  return (
    <div className="attendance-tab-style">
      <div className="attendance-header">
        <h2>Attendance</h2>
      </div>
      <div className="attendance-chart">chart</div>
      <div className="attendance-list">
        {monthsData.map((data, index) => (
          <div className="attendance-item">
            <div className="month-design">{data.month}</div>
            <div className="days-design">
              <div className="day-info">
                <span className="day-count">{data.operatingDays}</span>
                <span className="day-label">Operating Days</span>
              </div>
              <div className="day-info">
                <span className="day-count">{data.presentDays}</span>
                <span className="day-label">Present Days</span>
              </div>
              <div className="day-info">
                <span className="day-count">{data.operatingDays - data.presentDays}</span>
                <span className="day-label">Absent Days</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default AttendanceTab;
