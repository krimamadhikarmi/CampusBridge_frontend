const SelectNotice = ({ selectCategory, setSelectCategory }) => {
  return (
    <div className="choice-box">
      <button onClick={() => setSelectCategory('All')} className={selectCategory === 'All' ? 'active' : ''}>
        All
      </button>
      <button onClick={() => setSelectCategory('College')} className={selectCategory === 'College' ? 'active' : ''}>
        College
      </button>
      <button
        onClick={() => setSelectCategory('University')}
        className={selectCategory === 'University' ? 'active' : ''}>
        University
      </button>
    </div>
  );
};
export default SelectNotice;
