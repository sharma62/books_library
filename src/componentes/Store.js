import React from 'react'
import ItemCard from './store/ItemCard'

const Store = (props) => {

  return (
    <>
      <div className={`container-fluid bg-${props.mode}`} style={{ color: props.mode === 'dark' ? 'white' : '#042743' }} >
        <div className={`container bg-${props.mode}`}>
          <h2 className='text-center py-4 ' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}> Books</h2>
          <div className=" py-4 d-flex overflow-auto " >

            <ItemCard  title="C++" about="Good Explanation" imgSrc="https://i.postimg.cc/wM0QGsxg/Cpp.jpg" readSrc="https://www.w3schools.com/cpp/cpp_intro.asp#:~:text=C%2B%2B%20is%20one%20of%20the,be%20reused%2C%20lowering%20development%20costs." />
            <ItemCard  title="Opreating System" about="Good Explanation" imgSrc="https://i.postimg.cc/9fLXzmfz/OS.jpg" readSrc="https://www.tutorialspoint.com/operating_system/os_overview.htm" />
            <ItemCard  title="python" about="Good Explanation" imgSrc="https://i.postimg.cc/vmh9YSdh/python.jpg" readSrc="https://www.python.org/" />
            <ItemCard  title="TCP / IP " about="Good Explanation" imgSrc="https://i.postimg.cc/W3rDy27d/TCP.jpg" readSrc="https://www.geeksforgeeks.org/tcp-ip-model/" />
            <ItemCard  title="python" about="Good Explanation" imgSrc="https://i.postimg.cc/vmh9YSdh/python.jpg" readSrc="https://www.python.org/" />
            <ItemCard  title="python" about="Good Explanation" imgSrc="https://i.postimg.cc/vmh9YSdh/python.jpg" readSrc="https://www.python.org/" />
            <ItemCard  title="TCP / IP " about="Good Explanation" imgSrc="https://i.postimg.cc/W3rDy27d/TCP.jpg" readSrc="https://www.geeksforgeeks.org/tcp-ip-model/" />
            <ItemCard  title="C++" about="Good Explanation" imgSrc="https://i.postimg.cc/wM0QGsxg/Cpp.jpg" readSrc="https://www.w3schools.com/cpp/cpp_intro.asp#:~:text=C%2B%2B%20is%20one%20of%20the,be%20reused%2C%20lowering%20development%20costs." />
            <ItemCard  title="Opreating System" about="Good Explanation" imgSrc="https://i.postimg.cc/9fLXzmfz/OS.jpg" readSrc="https://www.tutorialspoint.com/operating_system/os_overview.htm" />
            <ItemCard  title="python" about="Good Explanation" imgSrc="https://i.postimg.cc/vmh9YSdh/python.jpg" readSrc="https://www.python.org/" />
            <ItemCard  title="TCP / IP " about="Good Explanation" imgSrc="https://i.postimg.cc/W3rDy27d/TCP.jpg" readSrc="https://www.geeksforgeeks.org/tcp-ip-model/" />
            <ItemCard  title="python" about="Good Explanation" imgSrc="https://i.postimg.cc/vmh9YSdh/python.jpg" readSrc="https://www.python.org/" />
            <ItemCard  title="python" about="Good Explanation" imgSrc="https://i.postimg.cc/vmh9YSdh/python.jpg" readSrc="https://www.python.org/" />
            <ItemCard  title="TCP / IP " about="Good Explanation" imgSrc="https://i.postimg.cc/W3rDy27d/TCP.jpg" readSrc="https://www.geeksforgeeks.org/tcp-ip-model/" />
          </div>
        </div>
      </div>

      </>
      )
}

      export default Store
