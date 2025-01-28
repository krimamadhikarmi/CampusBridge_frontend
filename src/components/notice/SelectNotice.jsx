// const SelectNotice = ({ selectCategory, setSelectCategory }) => {
//   return (
//     <div className="choice-box">
//       <button onClick={() => setSelectCategory('All')} className={selectCategory === 'All' ? 'active' : ''}>
//         All
//       </button>
//       <button onClick={() => setSelectCategory('College')} className={selectCategory === 'College' ? 'active' : ''}>
//         College
//       </button>
//       <button
//         onClick={() => setSelectCategory('University')}
//         className={selectCategory === 'University' ? 'active' : ''}>
//         University
//       </button>
//     </div>
//   );
// };
// export default SelectNotice;
const SelectNotice = ({ selectCategory, setSelectCategory, role }) => {
  const renderButtons = () => {
    if (role.includes('University') || role.includes('College')) {
      // No filter button for University role
      return null;
    }

    if (role.includes('Teacher') || role.includes('Student')) {
      // Teacher and Student roles see All, University, and College buttons
      return (
        <>
          <button onClick={() => setSelectCategory('All')} className={selectCategory === 'All' ? 'active' : ''}>
            All
          </button>
          <button
            onClick={() => setSelectCategory('University')}
            className={selectCategory === 'University' ? 'active' : ''}>
            University
          </button>
          <button onClick={() => setSelectCategory('College')} className={selectCategory === 'College' ? 'active' : ''}>
            College
          </button>
        </>
      );
    }

    return null; // Default case (e.g., ClubHead or undefined roles)
  };

  return <div className="choice-box">{renderButtons()}</div>;
};

export default SelectNotice;
