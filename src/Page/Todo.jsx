import React from 'react';
import TextField from '../Component/TextField/TextField';
import Button from '../Component/Button/Button';
import Paragraph from '../Component/Paragraph/Paragraph';

const Todo = () => {
  const [input, setInput] = React.useState();
  const [todo, setTodo] = React.useState([]);
  const inputValueData = (event) => {
    setInput(event.target.value);
  };

  const addData = () => {
    setTodo((prevState) => {
      return [...prevState, input];
    });
  };
  
  return (
    <div>
      <div className="w-[600px] h-[400px] border-[2px] bg-[#0A79DF]">
        <Paragraph
          ParagraphClassName="text-[44px] text-[#000] text-center font-bold underline"
          paragraphTexts="Todo-App"
        />
        <div className="flex flex-row justify-center">
          <div>
            <TextField
              placeholder="Add-Data.."
              className="border-[2px] placeholder:text-[14px] placeholder:font-bold placeholder:text-center  border-[#18181B] h-[50px] w-[500px] rounded-[24px] mt-12"
              handleChange={inputValueData}
            />
            <Button
              buttonClassName="h-[50px] w-[500px] bg-gradient-to-r mt-12 text-[24px] rounded-[24px] text-[#FFF] from-[#875C00] to-[#FFA19C]"
              buttonText="Add"
              buttonClick={addData}
            />
            <ul>
              {todo &&
                todo.map((item, index) => {
                  return (
                    <div>
                      <li className="text-[14px] text-[#000] text-center font-bold underline">
                        {item}
                      </li>
                    </div>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
