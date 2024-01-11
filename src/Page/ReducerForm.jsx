import React from 'react';
import TextField from '../Component/TextField/TextField';
import Paragraph from '../Component/Paragraph/Paragraph';
import Button from '../Component/Button/Button';
import Dropdown from '../Component/Dropdown/Dropdown';
import { useReducer } from 'react';
import {ContextCreation} from "../Context/ContextCreation"
const initialValue = {
           email: '',
           password: '',
           name: '',
           drop: '',
           final: [],
};
const reducerData = (state, action) => {
           if (action.type === 'email') {
                      return {
                                 ...state,
                                 email: action.payload,
                      };
           } else if (action.type === 'password') {
                      return {
                                 ...state,
                                 password: action.payload,
                      };
           } else if (action.type === 'name') {
                      return {
                                 ...state,
                                 name: action.payload,
                      };
           } else if (action.type === 'dropdown') {
                      return {
                                 ...state,
                                 drop: action.payload,
                      };
           } else if ((action.type = 'submit')) {
                      return {
                                 ...state,
                                 final: [action.payload],
                      };
           }
};

const ReducerForm = () => {
        
           const [state, dispatch] = useReducer(reducerData, initialValue);
const data=React.useContext(ContextCreation)
console.log(data.data)
           const handleEvent = (e, data) => {
                      if (data === 'Email') {
                                 //setEmail(e.target.value);
                                 dispatch({ type: 'email', payload: e.target.value });
                      } else if (data === 'password') {
                                 //setPassword(e.target.value);
                                 dispatch({ type: 'password', payload: e.target.value });
                      } else if (data === 'name') {
                                 //setName(e.target.value);
                                 dispatch({ type: 'name', payload: e.target.value });
                      }
           };
           const selectValue = (e) => {
                     
                      dispatch({ type: 'dropdown', payload: e.target.value });
           };

           const handleSubmit = () => {
                      let data = {
                                 email: state.email,
                                 password: state.password,
                                 drop: state.drop,
                                 name: state.name,
                      };
                      dispatch({ type: 'submit', payload: data });
           };
           console.log("render-reducer")
           return (
                      <div>
                                 <div className="border-[2px] border-[#18181B] h-[700px] w-[600px] bg-gradient-to-r  from-[#FFDB3D] to-[#FFF9B8]">
                                            <Paragraph
                                                       ParagraphClassName="text-[34px] text-[#000] text-center font-bold underline"
                                                       paragraphTexts={data.data}
                                            />
                                            <Paragraph
                                                       ParagraphClassName="text-[34px] text-[#000] text-center font-bold underline"
                                                       paragraphTexts={data.data1}
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

                                                                  <TextField
                                                                             placeholder="Password.."
                                                                             className="border-[2px] placeholder:text-[14px] placeholder:font-bold placeholder:text-center  border-[#18181B] h-[50px] w-[500px] rounded-[24px] mt-12"
                                                                             handleChange={(e) => handleEvent(e, 'password')}
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

export default ReducerForm;
