import Navbar from '../components/Navbar';
import '../styles/Help.css';

const Help = () => {
  return (
    <>
      <Navbar />
      <div className="help-header">
        <h2>Ask & Assit</h2>
      </div>
      <div className="help-box">
        <div className='question-box'>question form</div>
        <div className='rules-box'>Rules</div>
      </div>
    </>
  );
};
export default Help;
