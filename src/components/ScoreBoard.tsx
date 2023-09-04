import Paragraph from "./atoms/Paragraph";

import { ScoreBoardProps } from "@types";

import '@styles/scoreBoard.style.css';

const ScoreBoard = ({score1, score2}: ScoreBoardProps) => {
  return <section className="scoreBoard">
    <div className="scoreBoard_marker ">
      <Paragraph className="scoreBoard_marker_item" value={score1} title />
      <Paragraph className="scoreBoard_marker_item" value='-' title />
      <Paragraph className="scoreBoard_marker_item" value={score2} title />
    </div>
    <div>
      <Paragraph className="scoreBoard_name" value='marcador' subTitle />
    </div>
  </section>;
};

export default ScoreBoard;
