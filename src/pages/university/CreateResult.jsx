import { useState } from 'react';
import PageHeader from '../../components/common/PageHeader';
import Navbar from '../../components/Navbar';
import '../../styles/Result.css';
import FormHeader from '../../components/common/FormHeader';
import CustomFormField from '../../components/customFormField';
import ButtonGroup from '../../components/common/ButtonGroup';

const CreateResult = () => {
  const [addResult, setAddResult] = useState(false);

  const handleResultPop = () => {
    setAddResult(!addResult);
  };
  return (
    <>
      <Navbar />
      <PageHeader pageTitle={'Result'} />
      <div className="result-body">
        <div className="result-button">
          <button className="add-result-button" onClick={handleResultPop}>
            Add Result
          </button>
        </div>
        <div className="create-result">
          <table className="create-result-table">
            <thead>
              <tr>
                <th>Examination</th>
                <th>Semester</th>
                <th>Status</th>
                <th>Percentage</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Board</td>
                <td>7th</td>
                <td>Passed</td>
                <td>70%</td>
                <td className="activity-button">
                  <button className="view-button">Edit</button>
                  <button className="delete-button">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {addResult && (
        <div className="form-overlay">
          <div className="form-design">
            <FormHeader handleForm={handleResultPop} title={'Add Result'} />
            <form>
              <CustomFormField
                name={'ResultId'}
                label={'Result Id'}
                placeholder={'Enter the Result Id'}
                type={'text'}
              />

              <CustomFormField
                name={'ExaminationType'}
                label={'Examination Type'}
                placeholder={'Enter the  Examination Type'}
                type={'text'}
              />

              <CustomFormField name={'Semester'} label={'Semester'} placeholder={'Enter the Semester'} type={'text'} />

              <CustomFormField
                name={'Percentage'}
                label={'Percentage'}
                placeholder={'Enter the secured percentage'}
                type={'text'}
              />

              <CustomFormField name={'Status'} label={'Status'} placeholder={'Enter the result status'} type={'text'} />

              <CustomFormField
                name={'StudentID'}
                label={'Student Id'}
                placeholder={'Enter the Student Id'}
                type={'text'}
              />

              <ButtonGroup handleClose={handleResultPop} />
            </form>
          </div>
        </div>
      )}
    </>
  );
};
export default CreateResult;
