import { useState } from 'react';
import Navbar from '../components/Navbar';
import PageHeader from '../components/PageHeader';
import '../styles/Result.css';
import ResultTable from '../components/result/ResultTable';
import ResultInfo from '../components/result/ResultInfo';
import ResultType from '../components/result/ResultType';

const Result = () => {
  const [selectExam, setSelectExam] = useState('All');

  const resultData = [
    {
      id: 1,
      exam: 'Mid-Term',
      result: 'Passed',
      percentage: '80',
      semester: '6th',
    },
    {
      id: 2,
      exam: 'Assessment',
      result: 'Failed',
      percentage: '40',
      semester: '6th',
    },
    {
      id: 3,
      exam: 'Board',
      result: 'Passed',
      percentage: '80',
      semester: '6th',
    },
  ];

  const filterData = selectExam === 'All' ? resultData : resultData.filter((examdata) => examdata.exam === selectExam);

  return (
    <>
      <Navbar />
      <PageHeader pageTitle={'Result'} />
      <div className="result-box">
        <ResultInfo/>
        <ResultType selectExam={selectExam} setSelectExam={setSelectExam}/>
        {filterData.length > 0 ? (
          <ResultTable filterData={filterData} />
        ) : (
          <div className="no-result">
            <div className="icon">📄</div>
            <p>No published result for {selectExam}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Result;
