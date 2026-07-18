import React, { useState, useEffect } from 'react';
import '../../styles/TeacherSchedule.css';
import FormHeader from '../common/FormHeader';
import ButtonGroup from '../common/ButtonGroup';
import api from '../../api/axios';

const totalSlots = [0, 1, 2, 3, 4]; // Example available slot numbers

const TeacherConstraintsForm = ({ onSubmit, handleOnClick, teacherScheduleData = [] }) => {
  // State for unavailable slots: array of objects { teacherId, unavailableSlots }

  const [scheduleData, setScheduleData] = useState(teacherScheduleData);

  useEffect(() => {
    setScheduleData(teacherScheduleData);
  }, [teacherScheduleData]);

  const [unavailableData, setUnavailableData] = useState(
    scheduleData.map((t) => ({
      teacherId: t.teacherId,
      unavailableSlots: [],
    })),
  );

  // State for teacher time conflicts: array of objects { teacherId, conflictWith }
  const [conflictData, setConflictData] = useState(
    scheduleData?.map((t) => ({
      teacherId: t.teacherId,
      conflictWith: [],
    })),
  );

  // Handle unavailable slots checkbox toggle
  const handleUnavailableToggle = (teacherId, slot) => {
    setUnavailableData((prev) =>
      prev.map((item) => {
        if (item.teacherId === teacherId) {
          const hasSlot = item.unavailableSlots.includes(slot);
          return {
            teacherId,
            unavailableSlots: hasSlot
              ? item.unavailableSlots.filter((s) => s !== slot)
              : [...item.unavailableSlots, slot],
          };
        }
        return item;
      }),
    );
  };

  // Handle teacher conflict checkbox toggle
  const handleConflictToggle = (teacherId, conflictTeacherId) => {
    setConflictData((prev) =>
      prev.map((item) => {
        if (item.teacherId === teacherId) {
          const alreadyConflicts = item.conflictWith.includes(conflictTeacherId);
          return {
            teacherId,
            conflictWith: alreadyConflicts
              ? item.conflictWith.filter((id) => id !== conflictTeacherId)
              : [...item.conflictWith, conflictTeacherId],
          };
        }
        return item;
      }),
    );
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Data in the desired format:
  //   // unavailableData: [{ teacherId: "101", unavailableSlots: [0,1,3] }, ...]
  //   // conflictData: [{ teacherId: "101", conflictWith: ["102","103"] }, ...]
  //   const data = {
  //     unavailableSlots: unavailableData,
  //     teacherConflicts: conflictData,
  //   };
  //   console.log('Submitted Data:', data);
  //   if (onSubmit) onSubmit(data);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const mergedDataMap = new Map();

    // Process unavailableSlots
    unavailableData.forEach(({ teacherId, unavailableSlots }) => {
      mergedDataMap.set(teacherId, { teacherId, unavailableSlots, conflictWith: [] });
    });

    // Process teacherConflicts and merge with existing data
    conflictData.forEach(({ teacherId, conflictWith }) => {
      if (mergedDataMap.has(teacherId)) {
        mergedDataMap.get(teacherId).conflictWith = conflictWith;
      } else {
        mergedDataMap.set(teacherId, { teacherId, unavailableSlots: [], conflictWith });
      }
    });

    // Convert map values to array
    const finalData = Array.from(mergedDataMap.values());

    console.log('Submitting Data:', JSON.stringify(finalData));

    if (onSubmit) onSubmit(finalData);
    // const requestData = {
    //   unavailableSlots: unavailableData,
    //   teacherConflicts: conflictData,
    //   scheduleData: scheduleData, // Sending teacherScheduleData as "scheduleData"
    // };

    // console.log('Submitting Data:', JSON.stringify(requestData));

    try {
      const response = await api.post('Schedule/CreateTeacherScheduleFromGraph', JSON.stringify(finalData));

      console.log('Success:', response.data);

      if (onSubmit) onSubmit(finalData); // Handle response if needed
    } catch (error) {
      console.error('Error submitting data:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="form-overlay">
      <div className="form-container">
        <FormHeader title={'Create Teacher Schedule'} handleForm={handleOnClick} />
        <form onSubmit={handleSubmit} className="form-content">
          <div className="section">
            <legend>Unavailable Slots</legend>
            {scheduleData.map((teacher) => (
              <div key={teacher.teacherId} className="teacher-card">
                <strong>
                  {teacher.courseName} ({teacher.teacherId})
                </strong>
                <div className="checkbox-group">
                  {totalSlots.map((slot) => (
                    <label key={slot} className="checkbox-label">
                      <input
                        type="checkbox"
                        checked={unavailableData
                          .find((t) => t.teacherId === teacher.teacherId)
                          .unavailableSlots.includes(slot)}
                        onChange={() => handleUnavailableToggle(teacher.teacherId, slot)}
                      />
                      Slot {slot}
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="section">
            <legend>Teacher Time Conflicts</legend>
            {scheduleData.map((teacher) => (
              <div key={teacher.teacherId} className="teacher-card">
                <strong>
                  {teacher.name} ({teacher.teacherId})
                </strong>
                <div className="checkbox-group">
                  {scheduleData
                    .filter((t) => t.teacherId !== teacher.teacherId) // Exclude self
                    .map((otherTeacher) => (
                      <label key={otherTeacher.teacherId} className="checkbox-label">
                        <input
                          type="checkbox"
                          checked={conflictData
                            .find((t) => t.teacherId === teacher.teacherId)
                            .conflictWith.includes(otherTeacher.teacherId)}
                          onChange={() => handleConflictToggle(teacher.teacherId, otherTeacher.teacherId)}
                        />
                        {otherTeacher.name} ({otherTeacher.teacherId})
                      </label>
                    ))}
                </div>
              </div>
            ))}
          </div>
          <ButtonGroup handleClose={handleOnClick} />
        </form>
      </div>
    </div>
  );
};

export default TeacherConstraintsForm;
