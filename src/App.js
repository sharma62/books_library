import Accordion from './componentes/Accordion';
import Navbar from './componentes/Navbar';
import ItemCard from './componentes/store/ItemCard';
 
function App() {
  return (
    <>
      <Navbar title="Books_library" features="Home" bookStore="BookStore" />
      <Accordion title="Text Ground " className="my-5" />
      <div className="container">
        <div className="row">
          <ItemCard title="C++" about="Good Explanation" imgSrc="https://i.postimg.cc/wM0QGsxg/Cpp.jpg" />
          <ItemCard title="Opreating System" about="Good Explanation" imgSrc="https://i.postimg.cc/9fLXzmfz/OS.jpg" />
          <ItemCard title="TCP / IP " about="Good Explanation" imgSrc="https://i.postimg.cc/NfvK302w/TCP.jpg" />
          <ItemCard title="python" about="Good Explanation" imgSrc="C:\Users\LENOVO\OneDrive\Desktop\React_project\books_library\assets\img\python.jpg" />
        </div>
      </div>
    </>
  );
}

export default App;
