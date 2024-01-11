import React from 'react';
import TextField from '../Component/TextField/TextField';
import Paragraph from '../Component/Paragraph/Paragraph';
import Button from '../Component/Button/Button';
import Dropdown from '../Component/Dropdown/Dropdown';
import { useNavigate } from 'react-router-dom';
const Form = () => {
  const navigate = useNavigate();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [name, setName] = React.useState();
  const [dropdown, setDropdown] = React.useState();

  const handleEvent = (e, data) => {
    if (data === 'Email') {
      setEmail(e.target.value);
    } else if (data === 'password') {
      setPassword(e.target.value);
    } else if (data === 'name') {
      setName(e.target.value);
    }
  };
  const handleSubmit = () => {
    let data = {
      email,
      password,
      name,
      dropdown,
    };
    console.log(data);
    navigate('/', { state: { key: data } });
  };
  const selectValue = (e) => {
    setDropdown(e.target.value);
  };
  return (
    <div>
      <div className="border-[2px] border-[#18181B] h-[700px] w-[600px] bg-gradient-to-r  from-[#FFDB3D] to-[#FFF9B8]">
        <Paragraph
          ParagraphClassName="text-[44px] text-[#000] text-center font-bold underline"
          paragraphTexts="Registration-Form"
        />

        <div className="flex flex-row justify-center mt-12">
          <div>
            <TextField
              placeholder="Name.."
              className="border-[2px] placeholder:text-[14px] placeholder:font-bold placeholder:text-center  border-[#18181B] h-[50px] w-[500px] rounded-[24px] mt-12"
              handleChange={(e) => handleEvent(e, 'name')}
            />
            <TextField
              placeholder="Email.."
              className="border-[2px] placeholder:text-[14px] placeholder:font-bold placeholder:text-center  border-[#18181B] h-[50px] w-[500px] rounded-[24px] mt-12"
              handleChange={(e) => handleEvent(e, 'Email')}
            />
            <Paragraph
              ParagraphClassName="text-[14px] text-[#000] text-center font-bold underline"
              paragraphTexts={email}
            />
            <TextField
              placeholder="Password.."
              className="border-[2px] placeholder:text-[14px] placeholder:font-bold placeholder:text-center  border-[#18181B] h-[50px] w-[500px] rounded-[24px] mt-12"
              handleChange={(e) => handleEvent(e, 'password')}
            />
            <Paragraph
              ParagraphClassName="text-[14px] text-[#000] text-center font-bold underline"
              paragraphTexts={password}
            />
            <Dropdown handleSelect={selectValue} />

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

export default Form;
