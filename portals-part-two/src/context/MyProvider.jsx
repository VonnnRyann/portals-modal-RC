import {useState,useRef, useEffect} from 'react'
import MyContext from './MyContext'
const MyProvider = ({children}) => {
    const [show, setShow] = useState(false)
    const [formData,setFormData] = useState({
        name: '',
        password: ''
    })

    const savedUserName = useRef()
    const inputRef = useRef()

    useEffect(() => {
        inputRef.current.focus()
    }, [inputRef])

    const changeHandler = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value})
      } 
  
      const submitHandler = (e) => {
        e.preventDefault()
        if(formData.name !== '' && formData.password !== '') {
          savedUserName.current = formData.name
          setFormData({
            name: '',
            password: ''
          })
          setShow(false);
        }
      }

  return (
    <MyContext.Provider value={{
        changeHandler,
        submitHandler,
        logOutHandler,
        inputRef,
        show
    }}>
        {children}
    </MyContext.Provider>
  )
}

export default MyProvider