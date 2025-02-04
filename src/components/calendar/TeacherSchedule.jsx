import React, { useState } from 'react';
import './TeacherSchedule.css';

// Example teacher data (this could be passed as a prop instead)
const teacherData = [
  { teacherId: "101", name: "Teacher 101" },
  { teacherId: "102", name: "Teacher 102" },
  { teacherId: "103", name: "Teacher 103" },
  { teacherId: "104", name: "Teacher 104" },
];

const totalSlots = [0, 1, 2, 3, 4]; // Example available slot numbers

const TeacherConstraintsForm = ({ onSubmit }) => {
  // State for unavailable slots: array of objects { teacherId, unavailableSlots }
  const [unavailableData, setUnavailableData] = useState(
    teacherData.map(t => ({
      teacherId: t.teacherId,
      unavailableSlots: []
    }))
  );

  // State for teacher time conflicts: array of objects { teacherId, conflictWith }
  const [conflictData, setConflictData] = useState(
    teacherData.map(t => ({
      teacherId: t.teacherId,
      conflictWith: []
    }))
  );

  // Handle unavailable slots checkbox toggle
  const handleUnavailableToggle = (teacherId, slot) => {
    setUnavailableData(prev =>
      prev.map(item => {
        if (item.teacherId === teacherId) {
          const hasSlot = item.unavailableSlots.includes(slot);
          return {
            teacherId,
            unavailableSlots: hasSlot
              ? item.unavailableSlots.filter(s => s !== slot)
              : [...item.unavailableSlots, slot]
          };
        }
        return item;
      })
    );
  };

  // Handle teacher conflict checkbox toggle
  const handleConflictToggle = (teacherId, conflictTeacherId) => {
    setConflictData(prev =>
      prev.map(item => {
        if (item.teacherId === teacherId) {
          const alreadyConflicts = item.conflictWith.includes(conflictTeacherId);
          return {
            teacherId,
            conflictWith: alreadyConflicts
              ? item.conflictWith.filter(id => id !== conflictTeacherId)
              : [...item.conflictWith, conflictTeacherId]
          };
        }
        return item;
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Data in the desired format:
    // unavailableData: [{ teacherId: "101", unavailableSlots: [0,1,3] }, ...]
    // conflictData: [{ teacherId: "101", conflictWith: ["102","103"] }, ...]
    const data = {
      unavailableSlots: unavailableData,
      teacherConflicts: conflictData
    };
    console.log("Submitted Data:", data);
    if (onSubmit) onSubmit(data);
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Teacher Constraints</h2>
      <form onSubmit={handleSubmit}>
        <fieldset style={{ marginBottom: '2rem' }}>
          <legend>Unavailable Slots</legend>
          {teacherData.map(teacher => (
            <div key={teacher.teacherId} style={{ marginBottom: '1rem' }}>
              <strong>{teacher.name} ({teacher.teacherId})</strong>
              <div>
                {totalSlots.map(slot => (
                  <label key={slot} style={{ marginRight: '1rem' }}>
                    <input
                      type="checkbox"
                      checked={
                        unavailableData.find(t => t.teacherId === teacher.teacherId)
                          .unavailableSlots.includes(slot)
                      }
                      onChange={() => handleUnavailableToggle(teacher.teacherId, slot)}
                    />
                    Slot {slot}
                  </label>
                ))}
              </div>
            </div>
          ))}
        </fieldset>

        <fieldset style={{ marginBottom: '2rem' }}>
          <legend>Teacher Time Conflicts</legend>
          {teacherData.map(teacher => (
            <div key={teacher.teacherId} style={{ marginBottom: '1rem' }}>
              <strong>{teacher.name} ({teacher.teacherId})</strong>
              <div>
                {teacherData
                  .filter(t => t.teacherId !== teacher.teacherId) // Exclude self
                  .map(otherTeacher => (
                    <label key={otherTeacher.teacherId} style={{ marginRight: '1rem' }}>
                      <input
                        type="checkbox"
                        checked={
                          conflictData.find(t => t.teacherId === teacher.teacherId)
                            .conflictWith.includes(otherTeacher.teacherId)
                        }
                        onChange={() =>
                          handleConflictToggle(teacher.teacherId, otherTeacher.teacherId)
                        }
                      />
                      {otherTeacher.name} ({otherTeacher.teacherId})
                    </label>
                  ))}
              </div>
            </div>
          ))}
        </fieldset>
        <button type="submit">Submit Constraints</button>
      </form>
    </div>
  );
};

export default TeacherConstraintsForm;
