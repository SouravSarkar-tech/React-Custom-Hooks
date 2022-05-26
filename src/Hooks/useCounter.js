import {useState} from 'react'

const useCounter = (startingValue) => {
    const[value,setValue]= useState(startingValue)

    const incresevalue = () =>{
        return setValue(value + 5)
    }
     const decresevalue = () =>{
        return setValue(value - 5)
    }
     const resetvalue = () =>{
        return setValue(startingValue)
    }
  return [value,incresevalue, decresevalue, resetvalue]
  
}

export default useCounter