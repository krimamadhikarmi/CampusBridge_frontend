import '../../styles/Profile.css'
const Sidebar=({setIsActiveTab})=>{
  return(
    <div className="sidebar">
      <p onClick={()=> setIsActiveTab('General')}>General</p>
      <p onClick={()=> setIsActiveTab('Attendance')}>Attendance</p>
      <p onClick={()=> setIsActiveTab('My Clubs')}>My Clubs</p>
      <p onClick={()=> setIsActiveTab('Account')}>Account</p>
      <p onClick={()=> setIsActiveTab('Assesment')}>Assesment</p>
    </div>
  )
}
export default Sidebar;