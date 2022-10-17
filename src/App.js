import React from 'react';

// import for use system properties
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import for components 
import Accordion from './componentes/Accordion';
import Navbar from './componentes/Navbar';
import Store from './componentes/Store';
import Jumbotron from './componentes/Jumbotron';
import Alert from './componentes/Alert';
// import Profile from './componentes/Profile';
import Footer from './componentes/Footer';
import Greeting from './componentes/Greeting';

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
   
      <Router>
        <Navbar title="Books_library" features="Home" bookStore="BookStore" mode={Mode} toggleMode={toggleMode}  />
        <Alert alert={alert} />
        <Jumbotron title="Dive in Store" heading="Welcome To Library" helperText={<Greeting mode={Mode} toggleMode={toggleMode} />} moreInfo="Comming soon" actionSrc="/" mode={Mode} toggleMode={toggleMode} />
        <Routes>
                                          {/* <Store mode={sendProps} toggleMode={reciveProps}> */}
          <Route path="/Store" element={<Store mode={Mode} toggleMode={toggleMode} />} />
        
          {/* <Route path="/profile" element={} /> */}

        </Routes>


         <Accordion title="Text Ground " className="my-5" showAlert={showAlert} mode={Mode} toggleMode={toggleMode} />
        <Footer mode={Mode} ToggleMode={toggleMode} />

      </Router>
    </>
  );
}
