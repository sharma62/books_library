import Accordion from './componentes/Accordion';
import Navbar from './componentes/Navbar';
import Item_card from './componentes/store/Item_card';

function App() {
  return (
    <>
      <Navbar title="Books_library" features="Home" bookStore="BookStore" />
      <Accordion title="Text Ground " className="my-5" />
      <div className="container">
        <div className="row">

          <Item_card title="C++" about="Good Explanation" imgSrc="https://i.postimg.cc/wM0QGsxg/Cpp.jpg" />
          <Item_card title="Opreating System" about="Good Explanation" imgSrc="https://i.postimg.cc/9fLXzmfz/OS.jpg" />
          <Item_card title="TCP / IP " about="Good Explanation" imgSrc="https://i.postimg.cc/NfvK302w/TCP.jpg" />

        </div>
      </div>
    </>
  );
}

export default App;
