const initialValue = {
           counter: 0,
           name: '',
           email: '',
           password: '',
           confirmPassword: '',
};

const reducer = (state = initialValue, action) => {
           switch (action.type) {
                      case 'INCREMENT':
                                 return { counter: state.counter + 1 };
                      case 'Name':
                                 return {
                                            ...state,
                                            name: action.payload,
                                 };
                      case 'Email':
                                 return { 
                                           ...state,
                                            email: action.payload,
                                 };
                      case 'Password':
                                 return {
                                            ...state,
                                            password: action.payload,
                                 };
                      default:
                                 return state;
           }
};

export default reducer;
