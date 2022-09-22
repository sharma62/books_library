import React from 'react';
import Accordion from './componentes/Accordion';
import Navbar from './componentes/Navbar';
import Store from './componentes/Store';
import Jumbotron from './componentes/Jumbotron';
import Alert from './componentes/Alert';
import { useState } from 'react';
import Footer from './componentes/Footer';
 import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App() {
  const [alert, setAlert] = useState(null)

  const showAlert = (massage, type) => {
    setAlert({ msg: massage, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  }
  const [Mode, setMode] = useState('light');

  const toggleMode = (toggle) => {
    setMode(toggle);
  }

  return (
    <>

              <Navbar title="Books_library" features="Home" bookStore="BookStore" mode={Mode} toggleMode={toggleMode} />
              <Alert alert={alert} />
              <Jumbotron title="Dive in Store" heading="Welcome To Library" helperText="Here you can connect with library" moreInfo="Comming soon" actionSrc="/" mode={Mode} toggleMode={toggleMode} />
              <Store mode={Mode} toggleMode={toggleMode} />
              <Accordion title="Text Ground " className="my-5" showAlert={showAlert} mode={Mode} toggleMode={toggleMode} />
              <Footer mode={Mode} ToggleMode={toggleMode} />
     
    </>
  );
}
