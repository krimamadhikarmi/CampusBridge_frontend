import { useState } from 'react';
const FormData = () => {
  const [formData, setFormData] = useState({
    courseId: '',
    courseTitle: '',
    courseDescription: '',
    courseObjective: '',
    isElective: false,
    fullMarks: '',
    passMarks: '',
    creditHour: 0,
    labDescription: '',
    books: [],
    unitsDTO: [],
  });

  const [currentBook, setCurrentBook] = useState('');
  const [currentUnit, setCurrentUnit] = useState({
    unitId: '',
    title: '',
    completionHours: 0,
    subUnits: [],
  });
  const [currentSubUnit, setCurrentSubUnit] = useState('');

  // Add a book to the list
  const addBook = () => {
    if (currentBook.trim() !== '') {
      setFormData((prev) => ({
        ...prev,
        books: [...prev.books, currentBook],
      }));
      setCurrentBook('');
    }
  };

  // Add a sub-unit to the current unit
  const addSubUnit = () => {
    if (currentSubUnit.trim() !== '') {
      setCurrentUnit((prev) => ({
        ...prev,
        subUnits: [...prev.subUnits, currentSubUnit],
      }));
      setCurrentSubUnit('');
    }
  };

  // Add the current unit to the unitsDTO list
  const addUnit = () => {
    if (currentUnit.unitId.trim() !== '' && currentUnit.title.trim() !== '') {
      setFormData((prev) => ({
        ...prev,
        unitsDTO: [...prev.unitsDTO, { ...currentUnit }],
      }));
      setCurrentUnit({
        unitId: '',
        title: '',
        completionHours: 0,
        subUnits: [],
      });
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);

    // // API call to submit formData
    // const response = await fetch('your-api-endpoint', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData),
    // });

    // if (response.ok) {
    //   alert('Syllabus created successfully!');
    // } else {
    //   alert('Error creating syllabus.');
    // }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Course ID"
        value={formData.courseId}
        onChange={(e) => setFormData({ ...formData, courseId: e.target.value })}
      />
      {/* Add other course-related inputs here */}

      {/* Books Section */}
      <div>
        <h3>Books</h3>
        <input
          type="text"
          placeholder="Enter book name"
          value={currentBook}
          onChange={(e) => setCurrentBook(e.target.value)}
        />
        <button type="button" onClick={addBook}>
          Add Book
        </button>
        <ul>
          {formData.books.map((book, index) => (
            <li key={index}>{book}</li>
          ))}
        </ul>
      </div>

      {/* Units Section */}
      <div>
        <h3>Units</h3>
        <input
          type="text"
          placeholder="Unit ID"
          value={currentUnit.unitId}
          onChange={(e) => setCurrentUnit({ ...currentUnit, unitId: e.target.value })}
        />
        <input
          type="text"
          placeholder="Unit Title"
          value={currentUnit.title}
          onChange={(e) => setCurrentUnit({ ...currentUnit, title: e.target.value })}
        />
        <input
          type="number"
          placeholder="Completion Hours"
          value={currentUnit.completionHours}
          onChange={(e) =>
            setCurrentUnit({
              ...currentUnit,
              completionHours: parseInt(e.target.value, 10),
            })
          }
        />

        {/* Sub-Units Section */}
        <div>
          <h4>Sub Units</h4>
          <input
            type="text"
            placeholder="Enter sub-unit"
            value={currentSubUnit}
            onChange={(e) => setCurrentSubUnit(e.target.value)}
          />
          <button type="button" onClick={addSubUnit}>
            Add Sub Unit
          </button>
          <ul>
            {currentUnit.subUnits.map((subUnit, index) => (
              <li key={index}>{subUnit}</li>
            ))}
          </ul>
        </div>

        <button type="button" onClick={addUnit}>
          Add Unit
        </button>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormData;
