import logo from "./logo.svg";
import "./App.css";
import { ClickCounter } from "../src/components/counter.js";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a>Learn React</a>
      </header>
      <ClickCounter />
    </div>
  );
}

export default App;
