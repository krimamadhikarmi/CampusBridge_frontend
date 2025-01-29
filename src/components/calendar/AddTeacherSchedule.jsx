import FormHeader from '../common/FormHeader';
import CustomFormField from '../customFormField';
import ButtonGroup from '../common/ButtonGroup';
import { useState } from 'react';

const AddTeacherSchedule = ({ handleOnClick, handleTeacherScheduleSubmit }) => {
  const [Semester, setSelectedSemester] = useState('');
  const [teachers, setTeachers] = useState([]);
  const [currentHolidays, setCurrentHolidays] = useState('');

  const [formData, setFormData] = useState({
    semester: '',
    startDate: '',
    endDate: '',
    slotsPerDay: '',
    breakMinutes: '',
    teachers: [],
    teacherAvailability: {},
    holidays: [],
  });

  const fetchTeacher = async (semester) => {
    console.log('Fetching teachers for semester', semester);

    const response = [
      { id: 1, name: 'Krima' },
      { id: 2, name: 'Csanat' },
      { id: 3, name: 'John Doe' },
    ];

    setTeachers(response);

    setFormData((prev) => ({
      ...prev,
      teachers: response,
      teacherAvailability: response.reduce((acc, teacher) => {
        acc[teacher.id] = '';
        return acc;
      }, {}),
    }));
  };

  const handleSemesterChange = (e) => {
    const semester = e.target.value;
    setSelectedSemester(semester);
    setFormData((prev) => ({ ...prev, semester }));

    if (semester) {
      fetchTeacher(semester);
    } else {
      setTeachers([]);
    }
  };

  const handleAvailabilityChange = (teacherId, value) => {
    setFormData((prev) => ({
      ...prev,
      teacherAvailability: {
        ...prev.teacherAvailability,
        [teacherId]: value,
      },
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const teacherSchedule = {
      ...formData,
      teachers: teachers.map((teacher) => ({
        id: teacher.id,
        name: teacher.name,
        availability: formData.teacherAvailability[teacher.id] || '',
      })),
    };
    console.log('Form Data:', JSON.stringify(teacherSchedule));
    handleTeacherScheduleSubmit(teacherSchedule);
  };

  const addHolidays = () => {
    if (currentHolidays.trim() !== '') {
      setFormData((prev) => ({
        ...prev,
        holidays: [...prev.holidays, currentHolidays],
      }));
      setCurrentHolidays('');
    }
  };

  return (
    <div className="form-overlay">
      <div className="form-design">
        <FormHeader title={'Create Teacher Schedule'} handleForm={handleOnClick} />
        <form onSubmit={handleSubmit}>
          <label htmlFor="semester">Semester</label>
          <select id="semester" name="semester" onChange={handleSemesterChange}>
            <option value="">Select Semester</option>
            {[...Array(8).keys()].map((num) => (
              <option key={num + 1} value={num + 1}>
                Semester {num + 1}
              </option>
            ))}
          </select>

          <CustomFormField label="Start Date" name="startDate" type="date" onChange={handleInputChange} />
          <CustomFormField label="End Date" name="endDate" type="date" onChange={handleInputChange} />
          <CustomFormField label="Slots Per Day" name="slotsPerDay" type="text" onChange={handleInputChange} />
          <CustomFormField label="Break Minutes" name="breakMinutes" type="text" onChange={handleInputChange} />

          {teachers.length > 0 && (
            <div className="teacher-list">
              <h3>Teachers for Semester {Semester}</h3>
              <ul>
                {teachers.map((teacher) => (
                  <div key={teacher.id}>
                    <li>{teacher.name}</li>
                    <CustomFormField
                      name={`availability_${teacher.id}`}
                      type="text"
                      placeholder="Enter availability (e.g. 1,0,1)"
                      value={formData.teacherAvailability[teacher.id] || ''}
                      onChange={(e) => handleAvailabilityChange(teacher.id, e.target.value)}
                    />
                  </div>
                ))}
              </ul>
            </div>
          )}

          <div className="course-field">
            <CustomFormField
              label="Holidays"
              type="date"
              value={currentHolidays}
              placeholder="Enter holiday dates"
              onChange={(e) => setCurrentHolidays(e.target.value)}
            />
            <button type="button" onClick={addHolidays}>
              Add
            </button>
          </div>

          <div>
            <ul>
              {formData.holidays.map((date, index) => (
                <li key={index}>{date}</li>
              ))}
            </ul>
          </div>

          <ButtonGroup handleClose={handleOnClick} />
        </form>
      </div>
    </div>
  );
};

export default AddTeacherSchedule;
