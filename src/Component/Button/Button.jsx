import React from 'react';

const Button = (props) => {
  return (
    <div>
      <button onClick={props.buttonClick} className={props.buttonClassName}>
        {props.buttonText}
      </button>
    </div>
  );
};

export default Button;
