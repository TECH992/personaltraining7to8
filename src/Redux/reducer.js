const initialValue = 0;

const reducer = (state = initialValue, action) => {
           if (action.type === 'increment') {
                      return state + 1;
           }
};
export default reducer;
