import Navbar from '../../components/Navbar';

const CreateSyllabus = () => {
  return (
    <>
      <Navbar />
      <div className="syllabus-body">
        <div className="display-div">
          <h2> Syllabus</h2>
          <div className="no-data-list">No Syllabus Yet</div>
        </div>
        <hr className="divider" />
        <div className="display-div">
          <h2>Courses</h2>
          <div className="no-data-list">No Courses Yet</div>
        </div>
      </div>
    </>
  );
};

export default CreateSyllabus;
