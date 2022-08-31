import Accordion from './componentes/Accordion';
import Navbar from './componentes/Navbar';

function App() {
  return (
    <>
       <Navbar title = "Books_library" features = "Home" bookStore= "BookStore"  />
        <Accordion title = "Text Ground " className ="my-5" />
    </>
  );
}

export default App;
