import React from "react";

import Header from "@components/Header";
import ScoreBoard from "@components/ScoreBoard";
import { PlayerBoard } from "@components/PlayerBoard";

import { useGame } from "@hooks/useGame";
import { options } from "@assets/game/game";

const App: React.FC = () => {
  const {play, gameStatus, pcStatus, playerStatus} = useGame(options, 1800);
  
  return (
    <div className="App">
      <Header />
      <ScoreBoard score1={playerStatus.score} score2={pcStatus.score} />
      <div className="main-board-game">
        <PlayerBoard
          player="self"
          onSelectOption={play}
          selectedOption={playerStatus.selectedOption}
        />
        <PlayerBoard 
          player="pc" 
          selectedOption={pcStatus.selectedOption}
          disableOptions 
        />
      </div>
    </div>
  );
};

export default App;
