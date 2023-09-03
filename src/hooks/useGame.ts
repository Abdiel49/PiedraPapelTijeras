import {GameStatus, Option, PlayerStatus} from "@types";
import { useEffect, useState } from "react";

export const useGame = (options: Option[], timeout = 1000) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [showSelections, setShowSelections] = useState<boolean>(false);

  const [gameStatus, setGameStatus] = useState<GameStatus>();
  const [pcStatus, setPcStatus] = useState<PlayerStatus>({score: 0, selectedOption: undefined});
  const [playerStatus, setPlayerStatus] = useState<PlayerStatus>({score: 0, selectedOption: undefined});

  const getRandomChoice = (): Option => {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
  };
  
  const play = (option: Option) => {
    setIsPlaying(true);
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

    setShowSelections(true);
  }

  const reset = () => {
    setPcStatus(prev => ({...prev, selectedOption: undefined}))
    setPlayerStatus(prev => ({...prev, selectedOption: undefined}))
    setGameStatus(undefined)
    setIsPlaying(false)
    setShowResult(false);
    setShowSelections(false);
  }
  
  // Game selections handle
  useEffect(() => {
    let timer: number;
    if (showSelections) {
      timer = setTimeout(() => {
        console.log(`This will run after <<< 1 >>> ${timeout} second!`)
        setShowResult(true);
        setShowSelections(false);
      }, timeout);
    }
    return () => clearTimeout(timer);
  }, [showSelections, timeout]);

  // Game result handle
  useEffect(() => {
    let timer: number;
    const timeout2 = timeout * 0.86;
    if (showResult) {
      timer = setTimeout(() => {
        console.log(`This will run after <<< 2 >>> ${timeout2} second!`)
        reset();
      }, timeout2);
    }
    return () => clearTimeout(timer);
  }, [showResult, timeout]);
  

  return {
    play,
    reset,
    gameStatus,
    pcStatus,
    playerStatus,
    showResult,
    showSelections,
    isPlaying
  }

}