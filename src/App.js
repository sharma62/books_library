 import Accordion from './componentes/Accordion';
import Navbar from './componentes/Navbar';
import ItemCard from './componentes/store/ItemCard';
import Jumbotron from './componentes/Jumbotron';
 
 export default function App() {
  
  return (  
    <>
      <Navbar title="Books_library" features="Home" bookStore="BookStore" />
      <Jumbotron  title="Dive in Store" heading ="Welcome To Library" helperText = "Here you can connect with library"  moreInfo= "coming soon" actionSrc="/"/>
      <div className="container">
        <h2 className='text-center py-4'>Books</h2>
        <div className="row my-4">
          <ItemCard title="C++" about="Good Explanation" imgSrc="https://i.postimg.cc/wM0QGsxg/Cpp.jpg" readSrc="https://www.w3schools.com/cpp/cpp_intro.asp#:~:text=C%2B%2B%20is%20one%20of%20the,be%20reused%2C%20lowering%20development%20costs." />
          <ItemCard title="Opreating System" about="Good Explanation" imgSrc="https://i.postimg.cc/9fLXzmfz/OS.jpg" readSrc="https://www.tutorialspoint.com/operating_system/os_overview.htm" />
          <ItemCard title="TCP / IP " about="Good Explanation" imgSrc="https://i.postimg.cc/W3rDy27d/TCP.jpg" readSrc="https://www.geeksforgeeks.org/tcp-ip-model/" />
          <ItemCard title="python" about="Good Explanation" imgSrc="https://i.postimg.cc/vmh9YSdh/python.jpg" readSrc="https://www.python.org/" />
        </div>
        </div><hr />
      <Accordion title="Text Ground " className="my-5" />
      
    </>
  );
}
