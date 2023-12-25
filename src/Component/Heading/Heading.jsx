import React from 'react';

const Heading = (props) => {
           return (
                      <div>
                                 <h3 className={props.headingClassName}>{props.headingText}</h3>
                      </div>
           );
};

export default Heading;
