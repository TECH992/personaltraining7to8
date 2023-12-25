import React from 'react';
import Paragraph from '../Component/Paragraph/Paragraph';
import Button from '../Component/Button/Button';
const initialColor = {
  color: '#FFF',
};

const reducerColorChange = (state, action) => {
  if (action.type === 'red') {
    return {
      color: action.payload,
    };
  } else if (action.type === 'green') {
    return {
      color: action.payload,
    };
  } else if (action.type === 'yellow') {
    return {
      color: action.payload,
    };
  } else if (action.type === 'blue') {
    return {
      color: action.payload,
    };
  }
};
const ColorChange = () => {
  const [state, dispatch] = React.useReducer(reducerColorChange, initialColor);

  const changeColor = (data) => {
    console.log(data);
    if (data === 'red') {
      dispatch({ type: 'red', payload: '#AE1438' });
    } else if (data === 'green') {
      dispatch({ type: 'green', payload: '#019031' });
    } else if (data === 'yellow') {
      dispatch({ type: 'yellow', payload: '#E5B143' });
    } else if (data === 'blue') {
      dispatch({ type: 'blue', payload: '#0A3D62' });
    }
  };
  return (
    <div>
      <div className=" w-[500px] h-[500px] border-[2px] border-[#00338C]">
        <Paragraph
          paragraphTexts="Color-change-using-reducer"
          ParagraphClassName="text-[24px] text-[#3399FF] font-bold text-center underline"
        />
        <div className=" flex flex-row justify-center">
          <div
            className=" w-[300px] h-[300px] border-[2px] border-[#00338C] mt-6"
            style={{ backgroundColor: `${state.color}` }}
          ></div>
        </div>

        <div className=" flex flex-row justify-between mt-12">
          <Button
            buttonText="Red"
            buttonClassName="w-[100px] h-[60px] rounded-[24px] border-[2px] bg-[#AE1438]"
            buttonClick={() => changeColor('red')}
          />
          <Button
            buttonText="Green"
            buttonClassName="w-[100px] h-[60px] rounded-[24px] border-[2px] bg-[#019031]"
            buttonClick={() => changeColor('green')}
          />
          <Button
            buttonText="Yellow"
            buttonClassName="w-[100px] h-[60px] rounded-[24px] border-[2px] bg-[#E5B143]"
            buttonClick={() => changeColor('yellow')}
          />
          <Button
            buttonText="Blue"
            buttonClassName="w-[100px] h-[60px] rounded-[24px] border-[2px] bg-[#0A3D62]"
            buttonClick={() => changeColor('blue')}
          />
        </div>
      </div>
    </div>
  );
};

export default ColorChange;
