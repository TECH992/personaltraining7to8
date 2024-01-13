import React from 'react';
import TextField from '../Component/TextField/TextField';
import Paragraph from '../Component/Paragraph/Paragraph';
import Button from '../Component/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { formData } from '../Redux/action';

const FormRedux = () => {
  const data = useSelector(state=>state);
  console.log(data)
  const dispatch = useDispatch();

  const handleEvent = (e, data) => {
    dispatch(formData({ data: data, value: e.target.value }));
  };

  const handleSubmit = () => {};

  return (
    <div>
      <div className="border-[2px] border-[#18181B] h-[700px] w-[600px] bg-gradient-to-r  from-[#FFDB3D] to-[#FFF9B8]">
        <Paragraph
          ParagraphClassName="text-[34px] text-[#000] text-center font-bold underline"
          paragraphTexts=""
        />
        <Paragraph
          ParagraphClassName="text-[34px] text-[#000] text-center font-bold underline"
          paragraphTexts=""
        />

        <div className="flex flex-row justify-center mt-12">
          <div>
            <TextField
              placeholder="Name.."
              className="border-[2px] placeholder:text-[14px] placeholder:font-bold placeholder:text-center  border-[#18181B] h-[50px] w-[500px] rounded-[24px] mt-12"
              handleChange={(e) => handleEvent(e, 'Name')}
            />
            <TextField
              placeholder="Email.."
              className="border-[2px] placeholder:text-[14px] placeholder:font-bold placeholder:text-center  border-[#18181B] h-[50px] w-[500px] rounded-[24px] mt-12"
              handleChange={(e) => handleEvent(e, 'Email')}
            />

            <TextField
              placeholder="Password.."
              className="border-[2px] placeholder:text-[14px] placeholder:font-bold placeholder:text-center  border-[#18181B] h-[50px] w-[500px] rounded-[24px] mt-12"
              handleChange={(e) => handleEvent(e, 'Password')}
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

export default FormRedux;
