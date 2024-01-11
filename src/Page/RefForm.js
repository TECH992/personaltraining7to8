import React from 'react';
import Paragraph from '../Component/Paragraph/Paragraph';
import Button from '../Component/Button/Button';
const RefForm = () => {
           console.log("render")
  const refData = React.useRef();

  const handleEvent = (e, data) => {
    if (data === 'name') {
      console.log(refData.current.value);
    }
    
  };

  const handleSubmit = () => {};
  return (
    <div>
      <div className="border-[2px] border-[#18181B] h-[700px] w-[600px] bg-gradient-to-r  from-[#FFDB3D] to-[#FFF9B8]">
        <Paragraph
          ParagraphClassName="text-[34px] text-[#000] text-center font-bold underline"
          paragraphTexts="Data using Ref-Hooks"
        />

        <div className="flex flex-row justify-center mt-12">
          <div>
            <input
              placeholder="Name.."
              className="border-[2px] placeholder:text-[14px] placeholder:font-bold placeholder:text-center  border-[#18181B] h-[50px] w-[500px] rounded-[24px] mt-12"
              onChange={(e) => handleEvent(e, 'name')}
              ref={refData}
            />
            <input
              placeholder="Email.."
              className="border-[2px] placeholder:text-[14px] placeholder:font-bold placeholder:text-center  border-[#18181B] h-[50px] w-[500px] rounded-[24px] mt-12"
              onChange={(e) => handleEvent(e, 'Email')}
            />

            <input
              placeholder="Password.."
              className="border-[2px] placeholder:text-[14px] placeholder:font-bold placeholder:text-center  border-[#18181B] h-[50px] w-[500px] rounded-[24px] mt-12"
              handleChange={(e) => handleEvent(e, 'password')}
            />

            <Button
              buttonClassName="h-[50px] w-[500px] bg-gradient-to-r mt-12 text-[24px] rounded-[24px] text-[#FFF] from-[#875C00] to-[#FFA19C]"
              buttonText="Submit"
              buttonClick={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefForm;
