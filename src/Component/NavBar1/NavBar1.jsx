import React from 'react';
import Paragraph from '../Paragraph/Paragraph';
import { Link ,NavLink} from 'react-router-dom';
const NavBar1 = () => {
  return (
    <div>
      <div className="w-[100%] h-[70px] border-[#000] border-[2px]">
        <div className="flex flex-row justify-between">
          <Paragraph
            ParagraphClassName="text-[20px] text-[#1AB8DB] font-[700]"
            paragraphTexts="React-Router"
          />
          <ul className="flex flex-row ">
            <NavLink className="px-4" to="/">
              <li>Color</li>
            </NavLink>
            <NavLink className="px-4" to="/form">
              <li>Form</li>
            </NavLink>
            <Link className="px-4" to="/counter">
              <li>Counter</li>
            </Link>
            <Link className="px-4" to="/todo">
              <li>Todo</li>
            </Link>
            <Link className="px-4" to="/colorchange">
              <li>ColorChange</li>
            </Link>
            <Link className="px-4" to="/list">
              <li>TodoList</li>
            </Link>
            <Link className="px-4" to="/effect">
              <li>EffectHooks</li>
            </Link>
            <Link className="px-4" to="/refForm">
              <li>RefForm</li>
            </Link>
            <Link className="px-4" to="/ReducerForm">
              <li>HookesEffectUpdate</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar1;
