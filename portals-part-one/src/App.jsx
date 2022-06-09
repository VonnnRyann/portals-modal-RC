import {useState,useRef} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
import Modal from './components/Modal';
import './App.css';

const App = () => {

    const [show, setShow] = useState(false);
    const [formData, setFormData] = useState({
      name: '', 
      password: ''
    })
    const savedUserName = useRef();
    const inputRef = useRef()

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

    const logOutHandler = () => {
      savedUserName.current = formData.name
      setFormData({
        name: '',
        password: ''
      })

    }

  return (
    <main>
     <Header 
     name={savedUserName.current} 
     setShow={setShow} 
     logOutHandler={logOutHandler}
     />
     <section> <h1> Main Content</h1> </section>
     <Modal 
     show={show}
     onClose={() => setShow(false)}
     >
       <Form 
       changeHandler={changeHandler}
       submitHandler={submitHandler}
       formData={formData}
       inputRef={inputRef}
       />
     </Modal>
     <Footer />
    </main>
  );
}

export default App;

