import {useEffect} from 'react'

const useTitleChange = (value) => {
    useEffect(() => {
      document.title = `😇: ${value}`
    
    }, [value])
    
  return (
    <div>useTitleChange</div>
  )
}

export default useTitleChange