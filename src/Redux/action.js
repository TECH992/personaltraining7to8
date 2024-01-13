export const increment = () => {
           return {
                      type: 'INCREMENT',
           };
};
export const formData = (data) => {
           if (data && data.hasOwnProperty('data') && data.hasOwnProperty('value')) {
                      return {
                                 type: data.data,
                                 payload:data.value
                                 
                      }
           } else {
                      return {
                                 type: 'wrong',
                                 payload:data
                      }
           }
};
