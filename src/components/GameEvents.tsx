import FistImg from '@assets/fist.png';
import PaperImg from '@assets/hello.png';
import ShearsImg from '@assets/peace.png';

import '@styles/gameEvents.style.css';
import { GameStatus, Option } from '@types';

export interface GameEventsProps {
  pcSelectedOption?: Option;
  playerSelectedOption?: Option;
  gameStatus?: GameStatus;
  showResult?: boolean;
  showChoises?: boolean;
}

// const GameMessages = 
export const GameEvents = (props: GameEventsProps) => {

  const gameMessage = props.gameStatus === 'You Win' ? '¡Ganaste!' : props.gameStatus === 'PC Wins' ? 'Perdiste!' :  props.gameStatus === 'Equal' ? '¡Empate!' : '';

  return (
    <div className='game-events-container'>
      {props.showChoises && (
        <section>
          {props.playerSelectedOption && (
            <div className='player-board_option-card'>
              <img 
                  className='player-board_option-img'
                  src={
                    props.playerSelectedOption === 'piedra' ? 
                      FistImg
                    : props.playerSelectedOption === 'papel' ? PaperImg : ShearsImg}
                  alt={props.playerSelectedOption}
                />
              <p>{props.playerSelectedOption}</p>
            </div>
          )}
        </section>
      )}

      {!props.showResult && (<div className="game-events-divisor" />)}

      {props.showResult && (
        <div>
          <h3>{gameMessage}</h3>
        </div>
      )}
      
      
      {props.showChoises && (
        <section>
          {props.pcSelectedOption && (
            <div className='player-board_option-card'>
              <img 
                  className='player-board_option-img'
                  src={
                    props.pcSelectedOption === 'piedra' ? 
                      FistImg
                    : props.pcSelectedOption === 'papel' ? PaperImg : ShearsImg}
                  alt={props.pcSelectedOption}
                />
              <p>{props.pcSelectedOption}</p>
            </div>
          )}
        </section>
      )}
    </div>
  );
};
