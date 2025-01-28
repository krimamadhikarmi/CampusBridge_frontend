import FormHeader from '../common/FormHeader';
import CustomFormField from '../customFormField';
import ButtonGroup from '../common/ButtonGroup';
import { useState } from 'react';
const AddExamForm = ({
  handlePop,
  handleSubmit,
  dateState,
  handleAddDate,
  handleUpdateDate,
  handleDateField,
  handleAddGap,
  gapState,
  handleUpdateGap,
  handleGapField,
}) => {
  const [Semester, setSemester] = useState('');
  const [StartDate, setStartDate] = useState('');
  const [EndDate, setEndDate] = useState('');

  const [formData, setFormData] = useState({
    semester: '',
    startDate: '',
    endDate: '',
    unavailableDates: [],
    gapBetweenExams: [],
  });

  const [currentUnavailableDate, setCurrentUnavailableDate] = useState('');
  const [currentGapDays, setCurrentGapDays] = useState('');

  const addUnavailableDate = () => {
    if (currentUnavailableDate.trim() !== '') {
      setFormData((prev) => ({
        ...prev,
        unavailableDates: [...prev.unavailableDates, currentUnavailableDate],
      }));
      setCurrentUnavailableDate('');
    }
  };

  const addGapDays = () => {
    if (currentGapDays.trim() !== '') {
      setFormData((prev) => ({
        ...prev,
        gapBetweenExams: [...prev.gapBetweenExams, currentGapDays],
      }));
      setCurrentGapDays('');
    }
  };

  const handleCreateSubmit = (event) => {
    // event.preventDefault();
    const scheduleData = {
      semester: Semester,
      startDate: StartDate,
      endDate: EndDate,
      unavailableDates: formData.unavailableDates,
      gapBetweenExams: formData.gapBetweenExams,
    };
    console.log('Form Data:', scheduleData);
    handleSubmit(scheduleData);
    console.log(JSON.stringify(scheduleData));
  };

  return (
    <>
      <div className="form-overlay">
        <div className="form-design">
          <FormHeader title={'Create Schedule'} handleForm={handlePop} />
          <form onSubmit={handleCreateSubmit}>
            <CustomFormField
              label={'Semester'}
              type={'text'}
              name={'Semester'}
              placeholder={'Enter the semester'}
              // value={semester}
              onChange={(e) => setSemester(e.target.value)}
            />
            <CustomFormField
              label={'Start Date'}
              type={'date'}
              name={'StartDate'}
              // value={startdate}
              onChange={(e) => setStartDate(e.target.value)}
            />
            <CustomFormField
              label={'End Date'}
              type={'date'}
              name={'EndDate'}
              // value={enddate}
              onChange={(e) => setEndDate(e.target.value)}
            />

            {/* {dateState.map((dates) => {
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
            </div> */}

            <div className="course-field">
              <CustomFormField
                label={'Unavailable Dates'}
                // name={dates.name}
                type={'date'}
                value={currentUnavailableDate}
                placeholder={'Enter unavailable dates'}
                onChange={(e) => setCurrentUnavailableDate(e.target.value)}
              />
              <button type="button" onClick={addUnavailableDate}>
                Add
              </button>
            </div>
            <div>
              <ul>
                {formData.unavailableDates.map((dates, index) => (
                  <li key={index}>{dates}</li>
                ))}
              </ul>
            </div>
            {/* {gapState.map((gap) => {
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
            </div> */}
            <div className="course-field">
              <CustomFormField
                label={'Gap Days'}
                // name={gap.name}
                type={'number'}
                value={currentGapDays}
                placeholder={'Enter gap days'}
                onChange={(e) => setCurrentGapDays(e.target.value)}
              />
              <button type="button" onClick={addGapDays}>
                Add
              </button>
            </div>
            <div>
              <ul>
                {formData.gapBetweenExams.map((gap, index) => (
                  <li key={index}>{gap}</li>
                ))}
              </ul>
            </div>
            <ButtonGroup handleClose={handlePop} />
          </form>
        </div>
      </div>
    </>
  );
};
export default AddExamForm;
