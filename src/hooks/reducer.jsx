export const initialFields = [
  {
    id:'',
    value:'',
    placeholder: 'Enter your Course Id',
    name: 'CourseId',
  },
];
export const reducer = ( state, action ) => {
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
    default:
      return state;
  }
};