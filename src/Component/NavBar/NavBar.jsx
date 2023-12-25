import React from 'react';
import Paragraph from '../Paragraph/Paragraph';
import cross from '../../Image/cross.png';
const NavBar = () => {
           return (
                      <div>
                                 <div className="flex flex-row justify-between">
                                            <Paragraph
                                                       ParagraphClassName="text-[20px] text-[#1AB8DB] font-[700]"
                                                       paragraphTexts="ADD TASK"
                                            />
                                            <img src={cross} alt="cross"  className='h-[15px] mt-4'/>
                                 </div>
                      </div>
           );
};

export default NavBar;
