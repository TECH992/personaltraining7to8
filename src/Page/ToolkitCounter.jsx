import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../ReduxToolkit/counterSlice'

export function ToolkitCounter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className="flex flex-row justify-center">
      <div className="w-[500px] h-[200px] border-[2px] border-[#000] mt-12">
      <p className="text-[24px] text-center font-bold">{count}</p>
      <div className="flex flex-row justify-center">
      <button
          aria-label="Increment value"
          className="w-[200px] h-[70px] border-[2px] border-[#000]"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        
        <button
                                                         aria-label="Decrement value"
                                                         className="w-[200px] h-[70px] border-[2px] border-[#000]"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
        
      </div>
    </div>
  )
}