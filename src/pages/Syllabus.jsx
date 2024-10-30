import Navbar from '../components/Navbar';
import PageHeader from '../components/PageHeader';
import '../styles/Syllabus.css';

const Syllabus = () => {
  return (
    <>
      <Navbar />
      <PageHeader pageTitle={'Syllabus'} />
      <div className="syllabus-box">
        <div className="syllabus-side-bar">
          <p>Advanced Java Programming</p>
          <p>Data WareHousing and Data Mining</p>
          <p>Principle of Management</p>
          <p>Project Work</p>
          <p>Electives</p>
          
        </div>
        <div className="syllabus-content"></div>
      </div>
    </>
  );
};
export default Syllabus;
