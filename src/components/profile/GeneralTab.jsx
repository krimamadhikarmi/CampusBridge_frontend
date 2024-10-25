import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'; // Import specific icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const GeneralTab = () => {
  const [editForm, setEditForm] = useState(false);

  const toogleEditForm = () => {
    console.log('toogled');
    setEditForm(!editForm);
  };
  return (
    <div className="generaltab-style">
      <div>
        <div className="header-part">
          <div className="profile-header">
            <h2>Your Profile</h2>
            <div className="edit-icon" onClick={toogleEditForm}>
              <FontAwesomeIcon icon={faPenToSquare} color="#004d4d" />
            </div>
          </div>
          <div className="profile-picture">
            <img src="girl.webp" alt="girl" width={140} />
          </div>
        </div>

        <div className="profile-details">
          <p>
            <b>Name:</b> Krima Madhikarmi
          </p>
          <p>
            <b>Faculty:</b> Bsc.CSIT
          </p>
          <p>
            <b>College:</b> Samriddhi College
          </p>
          <p>
            <b>Batch:</b> 2075
          </p>
          <p>
            <b>Address:</b> Suryabinayak,Bhaktapur
          </p>
          <p>
            <b>Phone:</b> 98433838828
          </p>
          <p>
            <b>Email:</b> madhikrima20@gmail.com
          </p>
        </div>
      </div>
      {editForm && (
        <div className="edit-form">
          <div className="form-head">
            Edit Your Profile
            <div className="closebutton">
              {/* Add the SVG as a close button */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0 0 30 30"
                fill="#004d4d"
                style={{ cursor: 'pointer' }}
                onClick={toogleEditForm}>
                <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"></path>
              </svg>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default GeneralTab;
