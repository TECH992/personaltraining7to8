import React from 'react'
import { ContextCreation } from '../Context/ContextCreation';
import { useLocation } from 'react-router-dom';
export default function Color() {
  const location = useLocation();
console.log(location);
           const data = React.useContext(ContextCreation);

  return (
    <div className="flex flex-row justify-between w-[700px] mt-4 mx-12">
                        {data && data.colorDataValue && data.colorDataValue.map((item) => {
                                   return (
                                              <div
                                                       className=" w-[40px] h-[40px]" 
                                       style={{ backgroundColor: `${item}` }}
                                     ></div>
                                   );
      })}
    </div>
  );
}
