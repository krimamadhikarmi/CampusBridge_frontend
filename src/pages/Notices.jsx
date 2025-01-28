import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import PageHeader from '../components/common/PageHeader';
import '../styles/Notices.css';
import NoticeList from '../components/NoticeList';
import '../styles/common.css';
import AddNotice from '../components/notice/AddNotice';
import SelectNotice from '../components/notice/SelectNotice';
import { useToken } from '../context/TokenContext';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Notices = () => {
  const { role, id } = useToken();

  const [selectCategory, setSelectCategory] = useState('All');
  const [showpopup, setShowPopUp] = useState(false);
  const [currentDate, setCurrentDate] = useState('');
  const [notices, setNotices] = useState([]);
  const [deleteData, setDeleteData] = useState(false);
  const [selectNoticeId, setSelectNoticeId] = useState(null);

  useEffect(() => {
    // Set today's date in the correct format
    const today = new Date().toISOString().split('T')[0];
    setCurrentDate(today);

    const fetchNotice = async () => {
      if (role.includes('University') || role.includes('College')) {
        try {
          const response = await axios.get('https://localhost:7276/api/Notice/GetNotice');
          console.log('Response Data:', response.data);
          setNotices(response.data);
        } catch (e) {
          console.log('Error:', e);
        }
      } else if (role.includes('Student') || role.includes('Teacher')) {
        try {
          const response = await axios.get(`https://localhost:7276/api/Notice/GetNoticeByAudience/${role}`);
          console.log('Response Data:', response.data);
          setNotices(response.data);
        } catch (e) {
          console.log('Error:', e);
        }
      }
    };
    fetchNotice();
  }, []);

  const handleArticlePop = () => {
    setShowPopUp(!showpopup);
  };

  const handleDeletePop = (nid) => {
    console.log(nid, 'nid');
    setSelectNoticeId(nid);
    setDeleteData(true);
  };

  const handleDelete = async (nid) => {
    try {
      const response = await axios.delete(`https://localhost:7276/api/Notice/DeleteNotice/${nid}/${id}`);
      console.log(response.data, 'notice deleted');
      setNotices((prevNotices) => prevNotices.filter((notice) => notice.noticeId !== nid));
      setDeleteData(false);
      toast.success('Notice deleted successfully!', {
        style: {
          backgroundColor: '#004d4d',
          color: '#ffffff',
        },
      });
    } catch (e) {
      console.log(e, 'error');
      toast.error('Failed to delete notices.Please try again!');
    }
  };

  const handleNoticeSubmit = async (formData, event) => {
    // event.preventDefault()
    console.log(formData);
    const noticeData = {
      noticeId: formData.noticeId,
      title: formData.title,
      description: formData.description,
      directedTo: formData.directedTo,
      datePosted: formData.datePosted,
      creatorId: id,
    };
    console.log(JSON.stringify(noticeData));

    try {
      const response = await axios.post('https://localhost:7276/api/Notice/CreateNotice', JSON.stringify(noticeData), {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Resonse', response.data);
      setShowPopUp(false);
      setNotices((prevNotice) => [...prevNotice, response.data]);
      // Close the popup after submission
    } catch (e) {
      console.log(e);
    }
  };

  const getCheckboxOptions = (handleCheckboxChange) => {
    if (role.includes('College')) {
      return (
        <>
          <label>
            <input type="checkbox" name="directedTo" value="Teacher" onChange={handleCheckboxChange} /> Teacher
          </label>
          <label>
            <input type="checkbox" name="directedTo" value="Student" onChange={handleCheckboxChange} /> Student
          </label>
        </>
      );
    } else if (role.includes('ClubHead')) {
      return (
        <>
          <label>
            <input type="checkbox" name="directedTo" value="Club Member" onChange={handleCheckboxChange} /> Club Member
          </label>
          <label>
            <input type="checkbox" name="directedTo" value="College" onChange={handleCheckboxChange} /> College
          </label>
        </>
      );
    } else if (role.includes('University')) {
      return (
        <>
          <label>
            <input type="checkbox" name="directedTo" value="College" onChange={handleCheckboxChange} /> College
          </label>
          <label>
            <input type="checkbox" name="directedTo" value="Student" onChange={handleCheckboxChange} /> Student
          </label>
        </>
      );
    }
    return (
      <>
        <label>
          <input type="checkbox" name="directedTo" value="College" /> College
        </label>
        <label>
          <input type="checkbox" name="directedTo" value="Student" /> Student
        </label>
      </>
    );
  };

  const handleUpdateForm = async (updatedNotice) => {
    const formData = {
      noticeId: updatedNotice.noticeId,
      title: updatedNotice.title,
      description: updatedNotice.description,
      directedTo: updatedNotice.directedTo,
      datePosted: updatedNotice.dateUpdated,
      creatorId: id,
    };
    console.log(JSON.stringify(formData));
    try {
      const response = await axios.put(
        `https://localhost:7276/api/Notice/UpdateNotice/${formData.noticeId}`,
        JSON.stringify(formData),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      console.log('Resonse', response.data);
      setNotices((prevNotices) =>
        prevNotices.map((notice) =>
          notice.noticeId === formData.noticeId
            ? { ...notice, ...response.data } // Merge updated data
            : notice,
        ),
      );
      setShowPopUp(false);

      // Close the popup after submission
    } catch (e) {
      console.log(e);
    }
  };
  // const filterData = selectCategory === 'All' ? notices : notices.filter((notice) => notice.creator === selectCategory);

  const filterNoticesByRole = () => {
    if (role.includes('University')) {
      return notices.filter((notice) => notice.creator === 'University');
    }
    if (role.includes('College')) {
      return notices.filter((notice) => notice.creator === 'College' || notice.directedTo.includes('College'));
    }
    if (role.includes('Student') || role.includes('Teacher')) {
      return selectCategory === 'All' ? notices : notices.filter((notice) => notice.creator === selectCategory);
    }
  };

  const filterData = filterNoticesByRole();
  return (
    <>
      {console.log(notices)}
      <Navbar />
      <PageHeader pageTitle={'Notices'} />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeButton={false}
        style={{
          top: '50%', // Vertical center
          left: '50%', // Horizontal center
          transform: 'translate(-50%, -50%)', // Offset the toast to perfectly center it
          zIndex: 9999, // Ensure it's on top of other elements (like the navbar)
        }}
      />
      <div className="notice-box">
        <SelectNotice selectCategory={selectCategory} setSelectCategory={setSelectCategory} role={role} />
        {role.includes('College') || role.includes('University') || role.includes('ClubHead') ? (
          <div>
            <button className="add-notice-button" onClick={handleArticlePop}>
              Add Notice
            </button>
          </div>
        ) : null}
        <div className="notice-list">
          {filterData.map((notice, index) => (
            <div key={index} className="notice-item">
              <NoticeList
                index={index}
                nid={notice.noticeId}
                title={notice.title}
                content={notice.description}
                creator={notice.creator}
                createdDate={notice.datePosted}
                updatedDate={notice.dateUpdated}
                getCheckboxOptions={getCheckboxOptions}
                role={role}
                deleteData={deleteData}
                setDeleteData={setDeleteData}
                handleDelete={handleDelete}
                handleDeletePop={handleDeletePop}
                selectNoticeId={selectNoticeId}
                handleUpdateForm={handleUpdateForm}
              />
            </div>
          ))}
        </div>
      </div>
      {showpopup && (
        <AddNotice
          handleArticlePop={handleArticlePop}
          currentDate={currentDate}
          getCheckboxOptions={getCheckboxOptions}
          handleSubmit={handleNoticeSubmit}
          handleUpdateForm={handleUpdateForm}
        />
      )}
    </>
  );
};

export default Notices;
