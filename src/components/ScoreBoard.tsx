import { ScoreBoardProps } from "@types";
import '@styles/scoreBoard.style.css';

const ScoreBoard = ({score1, score2}: ScoreBoardProps) => {
  return <section className="scoreBoard">
    <div className="scoreBoard_marker ">
      <p className="scoreBoard_marker_item">{score1}</p>
      <p className="scoreBoard_marker_item">-</p>
      <p className="scoreBoard_marker_item">{score2}</p>
    </div>
    <div>
      <p className="scoreBoard_name">Marcador</p>
    </div>
  </section>;
};

export default ScoreBoard;
