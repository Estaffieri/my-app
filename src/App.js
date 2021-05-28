import React from "react";
import ReactDOM from "react-dom";
import "./App.css";

function App() {
  function buttonClick(e) {
    e.preventDefault();
    const element = <h2>Thanks for stopping by!</h2>;
    ReactDOM.render(element, document.getElementById("adieu"));
    console.log("clicked");
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="greeting">Welcome to my minimalist site!</h1>
        <button id="attendance" onClick={buttonClick}>
          Check In
        </button>
        <article id="adieu"></article>
      </header>
    </div>
  );
}

export default App;
