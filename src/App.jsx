import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const initialFormData = {
  author: "",
  title: "",
  body: "",
  public: "",
};

function App() {
  const [formData, setFormData] = useState(initialFormData);

  function updateFormData(event) {
    const key = event.target.name;

    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    const newObject = {
      ...formData,
      [key]: value,
    };

    setFormData(newObject);
  }

  function mostra(event) {
    event.preventDefault();
    setMostra((current) => [...current, formData]);
    setFormData(initialFormData);
  }


  return (
    <>
      <div className="container">
        <div className="row">
          <form onSubmit={mostra} action="">
            <label htmlFor="name">Nome Autore</label>
            <input
              name="author"
              id="name"
              type="text"
              className="form-control"
              value={formData.name}
              onChange={updateFormData}
            />

            <label htmlFor="title">Titolo</label>
            <input
              name="title"
              id="title"
              type="text"
              className="form-control"
              value={formData.title}
              onChange={updateFormData}
            />


            <label htmlFor="body">Contenuto</label>
            <br></br>
            <textarea
              name="body"
              id="messaggio"
              value={formData.body}
              onChange={updateFormData}
            ></textarea>

            <br />
            <input
              type="checkbox"
              name="public"
              id="public"
              checked={formData.public}
              onChange={updateFormData}
            />
            <label htmlFor="public">Post publico</label>
            <br />
            <button type="submit" className="btn btn-primary">
              Invia
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
