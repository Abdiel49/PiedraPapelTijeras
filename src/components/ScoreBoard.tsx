import { ScoreBoardProps } from "@types";
import '@styles/scoreBoard.style.css';


const ScoreBoard = ({score1, score2}: ScoreBoardProps) => {
  return <section className="scoreBoard">
    <h2>{score1}</h2>
    <h2>-</h2>
    <h2>{score2}</h2>
  </section>;
};

export default ScoreBoard;
