import React from "react";

import Header from "@components/Header";
import ScoreBoard from "@components/ScoreBoard";
import { PlayerBoard } from "@components/PlayerBoard";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <ScoreBoard score1={0} score2={0} />
      <div className="main-board-game">
        <PlayerBoard player="self"/>
        <PlayerBoard player="pc"/>
      </div>
    </div>
  );
};

export default App;
