import React from 'react'

const TextField = (props) => {
           return (
                      <div>
                                 <input placeholder={props.placeholder} onChange={props.handleChange} className={props.className} />
                      </div>
           )
}

export default TextField