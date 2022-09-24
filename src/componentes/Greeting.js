import React from 'react';
import './Greeting.css';

function Greeting(props) {

  let greeting = " ";
  const currTime = new Date().getHours();

  let colorCode = {};

  if (currTime >= 1 && currTime <= 11) {
    greeting = "Good Morning";
    colorCode.color = "green";
  }
  if (currTime >= 12 && currTime <= 19) {
    greeting = " Good Afternoon ";
    colorCode.color = "orange";
  }
  if (currTime >= 20) {
    greeting = " Good Night";
    colorCode.color = "black";
  }

  return (
    <div className={`container-fluid bg-${props.mode}`}>

      <div className="App container">
        <header className="App-header">
         <span style={colorCode}> <h1> {greeting} </h1></span>
        </header>
      </div>
    </div>
  );
}

export default Greeting;
