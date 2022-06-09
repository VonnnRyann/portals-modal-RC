import {createPortal} from 'react-dom'

const Modal = ({show, onClose,children}) => {
    if(!show) return null;

  return createPortal(
        // First argument
    <>
    <div className='overlay' onClick={onClose}></div>
    <div className='modal'>
      <div className='modal-children'>
        <button className='close-button' onClick={onClose}>
          Close
        </button>
        {children}
      </div>
    </div>
  </>,
  //2nd arguments
  document.querySelector('#modal')
    )
}

export default Modal