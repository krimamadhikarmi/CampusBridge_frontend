const MyClubTab = () => {
  return (
    <div className="myclub-tab-style">
      <div className="tab-header">
        <h1> My Clubs</h1>
      </div>
      <div className="clubs-container">
        <div className="club-card">
          <div className="club-title">Sports Club</div>
          <div className="club-image">
            <img src="images.png" alt="ball" />
          </div>
          <div className="view-box">
            <button className="club-button">View</button>
          </div>
        </div>
        <div className="club-card">
          <div className="club-title">Club 2</div>
          <div className="club-image">
            <img src="sports.jpeg" alt="ball" />
          </div>
          <div className="view-box">
            <button className="club-button">View</button>
          </div>
        </div>
        <div className="club-card">
          {' '}
          <div className="club-title">Club 3</div>
          <div className="club-image">
            <img src="images.png" alt="ball" />
          </div>
          <div className="view-box">
            <button className="club-button">View</button>
          </div>
        </div>
        <div className="club-card">
          {' '}
          <div className="club-title">Club 4</div>
          <div className="club-image">
            <img src="images.png" alt="ball" />
          </div>
          <div className="view-box">
            <button className="club-button">View</button>
          </div>
        </div>
        <div className="club-card">
          {' '}
          <div className="club-title">Club 5</div>
          <div className="club-image">
            <img src="images.png" alt="ball" />
          </div>
          <div className="view-box">
            <button className="club-button">View</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyClubTab;
