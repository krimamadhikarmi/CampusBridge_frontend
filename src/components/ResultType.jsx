const ResultType = ({ selectExam, setSelectExam }) => {
  return (
    <div className="result-type">
      <select value={selectExam} onChange={(e) => setSelectExam(e.target.value)}>
        <option value="All">All</option>
        <option value="Assessment">Assessment</option>
        <option value="Mid-Term">Mid Term</option>
        <option value="Pre-Board">Pre-Board</option>
        <option value="Board">Board</option>
      </select>
    </div>
  );
};

export default ResultType;
