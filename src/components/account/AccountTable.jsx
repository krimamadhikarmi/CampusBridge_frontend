const AccountTable = ({filterData}) => {
  return (
    <div className="account-present">
      <table className="account-table">
        <thead>
          <tr>
            <th>S.N</th>
            <th>Name</th>
            <th>Role</th>
            <th>Activity</th>
          </tr>
        </thead>
        <tbody>
          {filterData.map((account, index) => (
            <tr key={account.id}>
              <td>{index + 1}</td>
              <td>{account.name}</td>
              <td>{account.role}</td>
              <td className="activity-button">
                <button className="view-button">Edit</button>
                <button className="delete-button">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default AccountTable;
