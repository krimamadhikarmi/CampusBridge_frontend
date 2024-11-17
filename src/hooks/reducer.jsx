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
    id: '',
    unitId: '',
    title: '',
    creditHour: '',
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
          id: Math.floor(Math.random() * 2000),
          unitId: action.unitId || '',
          title: action.title || '',
          creditHour: action.creditHour || '',
        },
      ];
    case 'UPDATE_UNIT':
      return state.map((unit) =>
        unit.id === action.id
          ? { ...unit, [action.field]: action.value } // Update only the specified field
          : unit,
      );

    // case 'ADD_SUB_UNIT':
    //   return state.map((unit) =>
    //     unit.id === action.unitId
    //       ? {
    //           ...unit,
    //           subUnits: [
    //             ...unit.subUnits,
    //             {
    //               id: Math.floor(Math.random() * 2000),
    //               value: action.value,
    //             },
    //           ],
    //         }
    //       : unit,
    //   );

    // case 'UPDATE_SUB_UNIT':
    //   return state.map((unit) =>
    //     unit.id === action.unitId
    //       ? {
    //           ...unit,
    //           subUnits: unit.subUnits.map((subUnit) =>
    //             subUnit.id === action.id ? { ...subUnit, value: action.value } : subUnit,
    //           ),
    //         }
    //       : unit,
    //   );
    default:
      return state;
  }
};
