import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'; // Import specific icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import EditForm from './EditForm';

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
      {editForm &&(
        <EditForm toogleEditForm={toogleEditForm}/>
      )}
    </div>
  );
};
export default GeneralTab;
