// import Navbar from '../components/Navbar';
// import '../styles/Help.css';

// const Help = () => {
//   return (
//     <>
//       <Navbar />
//       <div className="help-header">
//         <h2>Ask & Assit</h2>
//       </div>
//       <div className="help-box">
//         <div className="question-box">
//           <div className="question-form-header">
//             <p className="form-header">Ask Your Question</p>
//             <p>
//               If you have any question related to courses,events or want to provide a feedback, feel free to ask it{' '}
//             </p>
//           </div>
//         </div>
//         <div className="rules-box">Rules</div>
//       </div>
//     </>
//   );
// };
// export default Help;

import Navbar from '../components/Navbar';
import '../styles/Help.css';

const Help = () => {
  const userName = 'Krima Madhikarmi'; // Replace this with actual user name from login data

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    // You can now send formData to the backend, which includes the hidden name field
    console.log('Form Data:', Object.fromEntries(formData));
  };

  return (
    <>
      <Navbar />
      <div className="help-header">
        <h2>Ask & Assist</h2>
      </div>
      <div className="help-box">
        <div className="question-box">
          <div className="question-form-header">
            <p className="form-header">Ask Your Question</p>
            <p className="form-info">
              If you have any question related to courses, events or want to provide feedback, feel free to ask.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="question-form">
            {/* Hidden name field */}
            <input type="hidden" name="name" value={userName} />
            <div className="form-group">
              <label htmlFor="question">Your Question:</label>
              <textarea
                name="question"
                id="question"
                required
                rows="4"
              />
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

            {/* Submit button */}
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
        <div className="rules-box">Rules</div>
      </div>
    </>
  );
};

export default Help;
