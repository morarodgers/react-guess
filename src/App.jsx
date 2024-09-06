import { Component } from "react";
import NumberGuessingGame from "./NumberGuessingGame";
import "./App.css";
import "./styles.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NumberGuessingGame />
      </div>
    );
  }
}

export default App;
