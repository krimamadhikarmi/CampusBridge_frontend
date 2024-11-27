const AccountType = ({selectaccount,setSelectAccount}) => {
  return (
    <div className="account-type">
      <select value={selectaccount} onChange={(e) => setSelectAccount(e.target.value)}>
        <option value="All">All</option>
        <option value="Teacher">Teacher</option>
        <option value="Student">Student</option>
      </select>
    </div>
  );
};
export default AccountType;
