// import "./App.css";
import { useState } from "react";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  function handleClick() {
    setButtonColor(buttonColor === "red" ? "blue" : "red");
  }
  return (
    <div className="App">
      <button
        style={{ backgroundColor: buttonColor }}
        onClick={() => handleClick()}
      >
        change to {buttonColor === "red" ? "blue" : "red"}!
      </button>
    </div>
  );
}

export default App;
