
const Sidebar=({isActiveTab,setIsActiveTab})=>{
  return(
    <div className="sidebar">
      <p className={isActiveTab==='General'?'active': ''} onClick={()=> setIsActiveTab('General')}>General</p>
      <p className={isActiveTab==='Attendance'?'active': '' } onClick={()=> setIsActiveTab('Attendance')}>Attendance</p>
      {/* <p  className={isActiveTab==='My Clubs'?'active': '' } onClick={()=> setIsActiveTab('My Clubs')}>My Clubs</p> */}
      <p  className={isActiveTab==='Account'?'active': '' } onClick={()=> setIsActiveTab('Account')}>Account</p>
      <p  className={isActiveTab==='Assignment'?'active': '' } onClick={()=> setIsActiveTab('Assignment')}>Assignment</p>
    </div>
  )
}
export default Sidebar;