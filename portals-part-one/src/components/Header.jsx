import React from 'react'

const Header = ({name,setShow,logOutHandler}) => {
  return (
    <header>
    <h1>
      Welcome <span>{name}</span>
    </h1>
    <aside>
      {/* If the userName is undefined or is empty we need to display the login button */}
      {/* else we display the logout button */}
      {name === undefined || name.length === 0 ? (
        <button className='button-show' onClick={() => setShow(true)}>
          Login
        </button>
      ) : (
        <button className='button-show' onClick={logOutHandler}>
          Logout
        </button>
      )}
    </aside>
  </header>
  )
}

export default Header