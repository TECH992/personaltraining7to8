import React from 'react';
import { ContextCreation } from './ContextCreation.js';
import  colorCode  from '../ColorCodeData';
const Provider = ({ children }) => {
           let data=" hi i am  frontend"
           let data1="hi i am backend developer"
  const colorDataValue =
    colorCode &&
    colorCode.colors &&
    colorCode.colors.Primary &&
             colorCode.colors.Primary.map((item, index) => {
               return item
    });
console.log(colorDataValue)
  return (
    <div>
      <ContextCreation.Provider value={{colorDataValue,data,data1}}>{children}</ContextCreation.Provider>
    </div>
  );
};

export default Provider;
