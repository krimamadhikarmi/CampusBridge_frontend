const GeneralTab = () => {
  return (
    <div className="generaltab-style">
      <div>
        <div className="header-part">
          <div className="profile-picture">
            <img src="girl.webp" alt="girl" width={140} />
          </div>
          <div className="introduction">
            <h2>Krima Madhikarmi</h2>
            <p> Bsc.CSIT 7th Semester</p>
          </div>
        </div>

        <div className="profile-details">
          <p><b>College:</b></p>
          <p><b>Batch</b>:</p>
          <p><b>Address:</b></p>
          <p><b>Phone:</b></p>
          <p><b>Email:</b></p>
        </div>
      </div>
    </div>
  );
};
export default GeneralTab;
