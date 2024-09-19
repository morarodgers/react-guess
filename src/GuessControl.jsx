import { useState } from "react";
import Button from "./Button";
import PropTypes from "prop-types";

const GuessControl = ({ onGuess, guessFeedback }) => {
  const [currentGuess, setCurrentGuess] = useState("");

  const handleInputChange = (event) => {
    setCurrentGuess(event.target.value);
  };

  const onSubmitGuess = () => {
    if (currentGuess.trim() !== "") {
      onGuess(Number(currentGuess));
      setCurrentGuess("");
    }
  };

  return (
    <div>
      <input
        type="number"
        value={currentGuess}
        onChange={handleInputChange}
        placeholder="Enter your guess"
      />
      {/* Add class based on the guess feedback */}
      <Button
        onClick={onSubmitGuess}
        className={
          guessFeedback === "correct"
            ? "correct"
            : guessFeedback === "incorrect"
            ? "incorrect"
            : ""
        }
      >
        Submit Guess
      </Button>
    </div>
  );
};

// Prop types validation
GuessControl.propTypes = {
  onGuess: PropTypes.func.isRequired,
  guessFeedback: PropTypes.string,
};

export default GuessControl;
