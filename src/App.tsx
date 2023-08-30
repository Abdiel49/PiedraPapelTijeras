import React from "react";
import "./App.css";

import Header from "@components/Header";
import ScoreBoard from "@components/ScoreBoard";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <ScoreBoard score1={0} score2={0} />
      
    </div>
  );
};

export default App;
