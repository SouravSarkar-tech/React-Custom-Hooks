import React, {useState} from 'react'
import './App.css'
import useTitleChange from './Hooks/useTitleChange'


function TitleChange() {
    const[value,setValue] = useState(0)
    useTitleChange(value)
  return (
    <div className='title'>
        Just Click To Increment the Title By 5: <button onClick={() => setValue(value + 5)}>Click Here: {value}</button>
    </div>
  )
}

export default TitleChange