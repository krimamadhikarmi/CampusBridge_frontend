import FormHeader from '../common/FormHeader';
import CustomFormField from '../customFormField';
import ButtonGroup from '../common/ButtonGroup';
const AddExamForm = ({
  handlePop,
  handleSubmit,
  semester,
  setSemester,
  startdate,
  setStartDate,
  enddate,
  setEndDate,
  dateState,
  handleAddDate,
  handleUpdateDate,
  handleDateField,
  handleAddGap,
  gapState,
  handleUpdateGap,
  handleGapField,
}) => {
  return (
    <>
      <div className="form-overlay">
        <div className="form-design">
          <FormHeader title={'Create Schedule'} handleForm={handlePop} />
          <form onSubmit={handleSubmit}>
            <CustomFormField
              label={'Semester'}
              type={'text'}
              name={'Semester'}
              placeholder={'Enter the semester'}
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
            />
            <CustomFormField
              label={'Start Date'}
              type={'date'}
              name={'StartDate'}
              value={startdate}
              onChange={(e) => setStartDate(e.target.value)}
            />
            <CustomFormField
              label={'End Date'}
              type={'date'}
              name={'EndDate'}
              value={enddate}
              onChange={(e) => setEndDate(e.target.value)}
            />

            {dateState.map((dates) => {
              return (
                <div key={dates.id} className="course-field">
                  <CustomFormField
                    label={'Unavailable Dates'}
                    name={dates.name}
                    type={'date'}
                    value={dates.value}
                    placeholder={dates.placeholder}
                    onChange={(e) => handleUpdateDate(e, dates.id)}
                  />
                  <button type="button" onClick={handleAddDate}>
                    Add
                  </button>
                </div>
              );
            })}
            <div className="add-div">
              <button onClick={handleDateField} className="add-field-button">
                Add Date
              </button>
            </div>

            {gapState.map((gap) => {
              return (
                <div key={gap.id} className="course-field">
                  <CustomFormField
                    label={'Gap Days'}
                    name={gap.name}
                    type={'number'}
                    value={gap.value}
                    placeholder={gap.placeholder}
                    onChange={(e) => handleUpdateGap(e, gap.id)}
                  />
                  <button type="button" onClick={handleAddGap}>
                    Add
                  </button>
                </div>
              );
            })}
            <div className="add-div">
              <button onClick={handleGapField} className="add-field-button">
                Add Gap
              </button>
            </div>
            <ButtonGroup handleClose={handlePop} />
          </form>
        </div>
      </div>
    </>
  );
};
export default AddExamForm;
