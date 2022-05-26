import {useState} from 'react'

const useInput = (initialValue) => {
  const [names, setNames] = useState(initialValue)
  const initial = () => {
    setNames("")
  }
  const valuebind = {
    names,
    onChange: (e) => {
      setNames(e.target.value)
    }
  }
  return [names, valuebind, initial]
}

export default useInput