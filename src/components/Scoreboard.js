import "../styles/Scoreboard.css";

const Scoreboard = (props) => {
  return (
    <div className="score">
      <span>Score: {props.score}</span>
      <span>Highscore: {props.highscore}</span>
    </div>
  );
};

export default Scoreboard;
