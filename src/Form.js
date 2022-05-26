import React from 'react'
import './App.css'
import useForm from './Hooks/useForm'


function Form() {
const [fName, valuebindFName, resetFName] = useForm('')
const [lName, valuebindLName, resetLName] = useForm('')

  const handlertoSubmit = (e) => {
    e.preventDefault()
    alert(`Hey There ${fName} ${lName}! 😄`)
    resetFName()
    resetLName()
  }
	return (
		<div className='form'>
      <form onSubmit={handlertoSubmit}>
				<div>
					<label>Enter Your First Name: </label>
					<input type="text" {...valuebindFName}/>
				</div>
                <br/>
				<div>
					<label>Enter Your Last Name:   </label>
					<input type="text" {...valuebindLName}/>
                    </div>

        <button>Submit It! ✅</button>
			</form>
		</div>
	)
}

export default Form