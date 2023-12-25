import React from 'react';
import NavBar from '../Component/NavBar/NavBar';
import logo from '../Image/Logo.png';
import Paragraph from '../Component/Paragraph/Paragraph';
import TextField from '../Component/TextField/TextField';
import Button from '../Component/Button/Button';

const TodoList = () => {
           return (
                      <div className="w-[700px] h-[700px] shadow-2xl">
                                 <div className="px-[24px] pt-4">
                                            <NavBar />
                                 </div>
                                 <div className="flex flex-row justify-center mt-12">
                                            <img src={logo} alt="logo" />
                                 </div>
                                 <div className="flex flex-row justify-center">
                                            <div>
                                                       <Paragraph
                                                                  ParagraphClassName="text-[20px] text-[#000] font-[500]"
                                                                  paragraphTexts="Title"
                                                       />
                                                       <TextField
                                                                  placeholder="Enter Task title"
                                                                  className="border-[1px] placeholder:text-[14px] outline-none placeholder:font-bold placeholder:text-center  border-[#1AB8DBD9] h-[50px] w-[500px] rounded-[10px] mt-4"
                                                       />
                                                       <Paragraph
                                                                  ParagraphClassName="text-[20px] mt-4 text-[#000] font-[500]"
                                                                  paragraphTexts="Description"
                                                       />
                                                       <TextField
                                                                  placeholder="Enter task description"
                                                                  className="border-[1px] placeholder:text-[14px] outline-none placeholder:font-bold placeholder:text-center  border-[#1AB8DBD9] h-[50px] w-[500px] rounded-[10px] mt-4"
                                                       />
                                                       <Paragraph
                                                                  ParagraphClassName="text-[20px] mt-4 text-[#000] font-[500]"
                                                                  paragraphTexts="Date end"
                                                       />
                                                       <TextField
                                                                  placeholder="Click here to choose date"
                                                                  className="border-[1px] placeholder:text-[14px] outline-none placeholder:font-bold placeholder:text-center  border-[#1AB8DBD9] h-[50px] w-[500px] rounded-[10px] mt-4"
                                                       />
                                                       <div className="flex flex-row justify-between mt-12">
                                                                  <Button
                                                                             buttonClassName="h-[40px] w-[106px] font-[600] text-[15px] rounded-[20px] text-[#FFF] bg-[#1AB8DB]"
                                                                             buttonText="Add"
                                                                  />
                                                                  <Button
                                                                             buttonClassName="h-[40px] w-[106px] font-[600] text-[15px] rounded-[20px] text-[#FFF] bg-[#FF0000]"
                                                                             buttonText="cancel"
                                                                  />
                                                       </div>
                                            </div>
                                 </div>
                      </div>
           );
};

export default TodoList;
