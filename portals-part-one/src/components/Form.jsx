import {useEffect} from 'react'

const Form = ({changeHandler, submitHandler, formData, inputRef}) => {

    useEffect(() => {
        inputRef.current.focus();

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