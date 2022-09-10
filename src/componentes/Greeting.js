import './Greeting.css';

function Greeting() {

  let greeting = " ";
   const currTime = new Date().getHours();
  
  let colorCode = { };

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
    <div className="App">
      <header className="App-header">
        <h1> Hello Sir , <span style = {colorCode}> {greeting} </span> </h1>
      </header>
    </div>
  );
 }

export default Greeting;
