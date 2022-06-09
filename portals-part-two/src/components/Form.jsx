import {useContext, useEffect} from 'react'
import MyContext from './MyContext'
const Form = () => {
    const context = useContext(MyContext);
    const {formData,
        changeHandler,
        inputRef,
        submitHandler} = context;

    useEffect(() => {
        inputRef.current.focus()
    }, [inputRef])


    

  return (
    <form>
    <input type="text"
    placeholder='Please enter your name'
    name='name'
    ref={inputRef}
    value={formData.name}
    onChange={changeHandler}
    />
    <input type="text"
    placeholder='Please enter your password'
    name='password'
    value={formData.password}
    onChange={changeHandler}
    />
    <button onClick={submitHandler}>Login</button>
</form>
  )
}

export default Form