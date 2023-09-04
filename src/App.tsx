import React from "react";

import Header from "@components/Header";
import ScoreBoard from "@components/ScoreBoard";
import { PlayerBoard } from "@components/PlayerBoard";

import { useGame } from "@hooks/useGame";
import { options } from "@assets/game/game";
import { GameEvents } from "@components/GameEvents";

const App: React.FC = () => {
  const {
    play,
    gameStatus,
    showSelections,
    showResult,
    pcStatus,
    playerStatus,
    isPlaying,
  } = useGame(options, 1600);
  
  return (
    <div className="App">
      <Header />
      <ScoreBoard score1={playerStatus.score} score2={pcStatus.score} />
      <div className="main-board-game">
        <PlayerBoard
          player="self"
          onSelectOption={play}
          selectedOption={playerStatus.selectedOption}
          disableOptions={isPlaying}
        />
        <GameEvents 
          showChoises={showSelections}
          showResult={showResult}
          pcSelectedOption={pcStatus.selectedOption}
          playerSelectedOption={playerStatus.selectedOption}
          gameStatus={gameStatus}
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
