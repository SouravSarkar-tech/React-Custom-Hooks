import React from 'react'
import './App.css'
import useCounter from './Hooks/useCounter'

const Counter = () => {
    const[counter, incresevalue, decresevalue, resetvalue] = useCounter(0);
  return (
    <div>
        <h2>Your Counter Is Here: <span>{counter}</span> </h2>
        <div className='counterbox'>
           Increment the value by 5 on each click: <button onClick={incresevalue}> Increment </button> <br/>
           Decrement the value by 5 on each click: <button onClick={decresevalue}> Decrement </button> <br/>
           Reset the value to its initial value on click:   <button onClick={resetvalue}> Reset </button>
        </div>
    </div>
  )
}

export default Counter