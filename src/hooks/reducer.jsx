export const initialFields = [
  {
    id: '',
    value: '',
    placeholder: 'Enter your Course Id',
    name: 'CourseId',
  },
];

export const initialBook = [
  {
    id: '',
    value: '',
    placeholder: 'Enter your books',
    name: 'Books',
  },
];

export const initialUnits = [
  {
    id: 1,
    unitId: '',
    title: '',
    creditHour: '',
    subUnits: [
      {
        id: 1,
        title: '',
      },
    ],
  },
];

export const SyllabusReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 2000),
          value: '',
          placeholder: action.placeholder,
          name: action.name,
        },
      ];
    case 'UPDATE':
      return state.map((field) => (field.id === action.id ? { ...field, value: action.value } : field));
    default:
      return state;
  }
};

export const BooksReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 2000),
          value: action.value,
          placeholder: action.placeholder,
          name: action.name,
        },
      ];
    case 'UPDATE':
      return state.map((field) => (field.id === action.id ? { ...field, value: action.value } : field));
    default:
      return state;
  }
};

export const UnitsReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_UNIT':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 2000), // Unique id
          unitId: '', // Initialize fields to empty
          title: '',
          creditHour: '',
          subUnits: [
            {
              id: Math.floor(Math.random() * 2000),
              title: '',
            },
          ],
        },
      ];
    case 'UPDATE_UNIT':
      console.log('Action:', action);
      return state.map((unit) =>
        unit.id === action.id
          ? { ...unit, [action.field]: action.value } // Correctly update the specific field
          : unit,
      );

    case 'ADD_SUB_UNIT':
      return state.map((unit) =>
        unit.id === action.unitId
          ? {
              ...unit,
              subUnits: [
                ...unit.subUnits,
                {
                  id: Math.floor(Math.random() * 2000), // Unique ID for subunit
                  title: '', // Initialize empty title
                },
              ],
            }
          : unit,
      );
    case 'UPDATE_SUB_UNIT':
      return state.map((unit) =>
        unit.id === action.unitId
          ? {
              ...unit,
              subUnits: unit.subUnits.map((subUnit) =>
                subUnit.id === action.id
                  ? { ...subUnit, title: action.value } // Update the subunit title
                  : subUnit,
              ),
            }
          : unit,
      );

    default:
      return state;
  }
};
