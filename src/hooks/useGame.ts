import {GameStatus, Option, PlayerStatus} from "@types";
import { useEffect, useState } from "react";

export const useGame = (options: Option[], timeout = 1000) => {
  const [gameStatus, setGameStatus] = useState<GameStatus>();
  const [pcStatus, setPcStatus] = useState<PlayerStatus>({score: 0, selectedOption: undefined});
  const [playerStatus, setPlayerStatus] = useState<PlayerStatus>({score: 0, selectedOption: undefined});

  const getRandomChoice = (): Option => {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
  };
  
  const play = (option: Option) => {
    
    const pcOption = getRandomChoice();
    setPcStatus(prev => ({...prev, selectedOption: pcOption}))
    setPlayerStatus(prev => ({...prev, selectedOption: option}))
    
    if (option === pcOption) {
      setGameStatus('Equal')
    } else if (
      (option === 'piedra' && pcOption === 'tijeras') ||
      (option === 'papel' && pcOption === 'piedra') ||
      (option === 'tijeras' && pcOption === 'papel')
      ) {
      setGameStatus('You Win')
      setPlayerStatus(prev => ({score: prev.score + 1, selectedOption: option}))
    } else {
      setGameStatus('PC Wins')
      setPcStatus(prev => ({score: prev.score + 1, selectedOption: pcOption}))
    }
  }

  const reset = () => {
    setPcStatus(prev => ({...prev, selectedOption: undefined}))
    setPlayerStatus(prev => ({...prev, selectedOption: undefined}))
    setGameStatus(undefined)
  }

  useEffect(() => {
    let timer: number;
    if (playerStatus.selectedOption && pcStatus.selectedOption) {
      timer = setTimeout(() => {
        console.log(`This will run after ${timeout} second!`)
        reset();
      }, timeout);
    }
    return () => clearTimeout(timer);
  }, [timeout, pcStatus, playerStatus]);
  

  return {
    play,
    reset,
    gameStatus,
    pcStatus,
    playerStatus,
  }

}