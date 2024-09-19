import PropTypes from "prop-types";
import Button from "./Button";

function GameOver({ hasWon, onReset }) {
  return (
    <div className={hasWon ? "game-over win" : "game-over lose"}>
      {hasWon && (
        <h2 className="game-over-message">
          Congratulation! You guessed my number.
        </h2>
      )}
      {!hasWon && (
        <h2 className="game-over-message">
          You did not guess my number. Would you like to try again?
        </h2>
      )}
      <Button onClick={onReset}>Play Again!</Button>
    </div>
  );
}

GameOver.propTypes = {
  hasWon: PropTypes.bool.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default GameOver;
