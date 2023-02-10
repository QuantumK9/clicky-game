import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [error, setError] = useState(false);

  const handleIncrement = () => {
    if (count >= 0) {
      setCount(count + 1);
      setError(false);
    }
  };
  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
    setError(true);
  };

  return (
    <div className="App">
      <button data-test="increment-button" onClick={handleIncrement}>
        Button
      </button>
      <button data-test="decrement-button" onClick={handleDecrement}>
        Button
      </button>
      <div data-test="count">{count}</div>
      <div data-test="counter-display"></div>
      <p data-test="error-message">
        {error ? "The counter can not go below zero" : ""}
      </p>
    </div>
  );
}

export default App;
