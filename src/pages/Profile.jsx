import { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/profile/Sidebar';
import GeneralTab from '../components/profile/GeneralTab';
import AttendanceTab from '../components/profile/AttendanceTab';
import MyClubTab from '../components/profile/MyClubTab';
import AccountTab from '../components/profile/AccountTab';
import AssesmentTab from '../components/profile/AssesmentTab';

const Profile = () => {
  const [isActiveTab, setIsActiveTab] = useState('General');

  const renderTab = () => {
    switch (isActiveTab) {
      case 'General':
        return <GeneralTab />;
      case 'Attendance':
        return <AttendanceTab />;
      case 'My Clubs':
        return <MyClubTab />;
      case 'Account':
        return <AccountTab />;
      case 'Assement':
        return <AssesmentTab />;
      default:
        return <GeneralTab />;
    }
  };
  return (
    <>
      <Navbar />
      <div className="profile-container">
        <Sidebar setIsActiveTab={setIsActiveTab} isActiveTab={isActiveTab} />
        <div className="content-area">{renderTab()}</div>
      </div>
    </>
  );
};
export default Profile;
