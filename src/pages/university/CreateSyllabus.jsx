import Navbar from '../../components/Navbar';

const CreateSyllabus = () => {
  return (
    <>
      <Navbar />
      <div className="syllabus-body">
        <div className="display-div">
          <h2> Syllabus</h2>
          <div className="button-container">
            <button className='add-button'>Add Syllabus</button>
          </div>
          <div className="no-data-list">No Syllabus Yet</div>
        </div>
        <hr className="divider" />
        <div className="display-div">
          <h2>Courses</h2>
          <div className="button-container">
            <button className='add-button'>Add Courses</button>
          </div>
          <div className="no-data-list">No Courses Yet</div>
        </div>
      </div>
    </>
  );
};

export default CreateSyllabus;
