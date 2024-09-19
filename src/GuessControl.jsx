import { useState } from "react";
import Button from "./Button";
import PropTypes from "prop-types";

const GuessControl = ({ onGuess }) => {
  const [currentGuess, setCurrentGuess] = useState("");

  const handleInputChange = (event) => {
    setCurrentGuess(event.target.value);
  };

  const onSubmitGuess = () => {
    onGuess(Number(currentGuess));
    setCurrentGuess("");
  };

  return (
    <div>
      <input type="number" value={currentGuess} onChange={handleInputChange} />
      <Button onClick={onSubmitGuess}>Submit Guess</Button>
    </div>
  );
};

// Prop types validation
GuessControl.propTypes = {
  onGuess: PropTypes.func.isRequired,
};

export default GuessControl;
