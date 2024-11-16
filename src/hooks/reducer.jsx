export const initialFields = [
  {
    id: '',
    value: '',
    placeholder: 'Enter your Course Id',
    name: 'CourseId',
  },
];
export const SyllabusReducer = (state, action) => {
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
