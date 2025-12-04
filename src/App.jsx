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
    const newObject = {
      ...formData,
      [key]: event.target.value,
    };
    setFormData(newObject);
  }

  return (
    <>

    </>
  )
}

export default App
