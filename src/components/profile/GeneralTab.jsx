import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'; // Import specific icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import EditForm from './EditForm';
import axios from 'axios';
import { useToken } from '../../context/TokenContext';

const GeneralTab = () => {
  const [editForm, setEditForm] = useState(false);
  const { id } = useToken();
  const [info, setInfo] = useState(null);

  useEffect =
    (() => {
      const fetchUser = async () => {
<<<<<<< HEAD
        try {
          console.log('hello');
=======

        try{
          console.log("hello");
>>>>>>> 0ab790b1cc1c420fb294f0c5b05a96725f448c19
          const response = await axios.get('https://localhost:7276/api/Student/GetStudentById/1');
          console.log('response', response.data);
          setInfo(response.data);
        } catch (e) {
          console.log(e);
        }
<<<<<<< HEAD
=======

>>>>>>> 0ab790b1cc1c420fb294f0c5b05a96725f448c19
      };
      console.log(info);

      fetchUser();
    },
    []);

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
            <b>Name:</b> {info?.name}
          </p>
          <p>
            <b>Faculty:</b> {info?.academicDTO.faculty}
          </p>
          {/* <p>
                <b>College:</b> {user.college}
              </p> */}
          <p>
            <b>Batch:</b> {info?.academicDTO.batch}
          </p>
          <p>
            <b>Address:</b> {info?.location}
          </p>
          <p>
            <b>Phone:</b> {info?.phone}
          </p>
          <p>
            <b>Email:</b> {info?.email}
          </p>
        </div>
      </div>
      {editForm && <EditForm toogleEditForm={toogleEditForm} />}
    </div>
  );
};
export default GeneralTab;