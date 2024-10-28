import Navbar from '../components/Navbar';
import PageHeader from '../components/PageHeader';
import '../styles/Help.css';

const Help = () => {
  const userName = 'Krima Madhikarmi';

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log('Form Data:', Object.fromEntries(formData));
  };

  return (
    <>
      <Navbar />
      <PageHeader pageTitle={'Ask & Assit'}/>
      <div className="help-box">
        <div className="question-box">
          <div className="question-form-header">
            <p className="form-header">Ask Your Question</p>
            <p className="form-info">
              If you have any question related to courses, events, or want to provide feedback, feel free to ask.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="question-form">
            {/* Hidden name field */}
            <input type="hidden" name="name" value={userName} />
            <div className="form-group">
              <label htmlFor="question">Your Question:</label>
              <textarea name="question" id="question" required rows="4" />
            </div>
            <div className="form-group">
              <label>Who is your question directed to?</label>
              <label>
                <input type="checkbox" name="target[]" value="Teacher" /> Teacher
              </label>
              <label>
                <input type="checkbox" name="target[]" value="College" /> College
              </label>
              <label>
                <input type="checkbox" name="target[]" value="University" /> University
              </label>
            </div>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
        <div className="rules-box">
          <h2>Rules</h2>
          <div className="rules">
            <li>Maintain a respectful tone in all questions and feedback.</li>
            <li>Avoid offensive or derogatory language; constructive criticism is encouraged.</li>
            <li>
              Ensure your questions and feedback are relevant to studies, courses, events, or university policies.
            </li>
            <li>Be specific in your questions and feedback to facilitate accurate responses.</li>
            <li>
              Aim to provide feedback that is constructive and helpful. Highlighting both strengths and weaknesses can
              foster improvement.
            </li>
            <li>
              If you receive a response that you don't understand, ask follow-up questions in a polite manner to seek
              clarification.
            </li>
          </div>
        </div>
      </div>
    </>
  );
};

export default Help;
