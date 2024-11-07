
import Card from './components/Card'
import {appContainer} from './styles/App.module.css'
import { useState } from 'react'

function App() {

  //Estado para cada input del formulario
  const [userName, setUserName] = useState("");
  const [book, setBook] = useState("");

  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  //Manejador de eventos para cada uno de los inputs
  const onChangeUserName = (e) => setUserName(e.target.value);
  const onChangeBook = (e) => setBook(e.target.value);

  //Manejador para el evento onSubmit
  const onSubmitForm = (e) =>{
      e.preventDefault();
      const regexString= /[a-zA-ZáÁ]$/;
      const regexSpaces = /^\s+/;

      if(userName.trim().length <= 3){
          setError(true);
          setErrorMessage("Por favor chequea que la información sea correcta")
      }
      else if(book.trim().length <= 5){
          setError(true);
          setErrorMessage("Por favor chequea que la información sea correcta")
      }
      else if(!regexString.test(userName)){
          setError(true);
          setErrorMessage("Por favor chequea que la información sea correcta, el nombre solo permite letras")
      }
      else if(regexSpaces.test(userName)){
        setError(true);
        setErrorMessage("Por favor chequea que la información sea correcta, no se permiten espacios al inicio")
    }
      else{
          setShow(true);
          setError(false);
      }
  }


  return(
      <>
      <h1>Información de libros</h1>

      <form onSubmit={onSubmitForm}>
        <div className={appContainer}>
        
          <label htmlFor="userName">Ingrese su nombre</label>
          <input type="text" name="userName" id="userName" onChange={onChangeUserName} />

          <label htmlFor="book">¿Cuál es tu libro favorito?</label>
          <input type="text" name="book" id="book" onChange={onChangeBook}/>
          <button type="submit">Enviar</button>
          </div>
      </form>

      {error ? <p>{errorMessage}</p> : ''}
      {show ? <Card userName={userName} book={book} /> : ''}
  </>
  )
}

export default App
