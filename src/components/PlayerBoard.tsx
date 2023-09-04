import { useMemo} from 'react';

import Paragraph from './atoms/Paragraph';

import FistImg from '@assets/fist.png';
import PaperImg from '@assets/hello.png';
import ShearsImg from '@assets/peace.png';
import { options } from '@assets/game/game';

import { Option, PlayerBoardProps } from '@types';
import '@styles/playerBoard.style.css';

export const PlayerBoard = (props: PlayerBoardProps) => {
  const player = useMemo(() => (
    props.player === 'self' ? 'Tu' : 'PC'
  ), [props.player])

  const onSelecOption = (option: Option) => {
    props.onSelectOption && props.onSelectOption(option);
  };


  return (
    <section className={`${player === 'PC' ? 'player-board_reverse' : 'player-board'}`}>
      <div className='player-board_options'>
        <Paragraph value={player} title center/>
        {props.player === 'self' && (
          <Paragraph value={'Selecciona una opción'} subTitle center/>
        )}
        {options.map((option, index) => (
          <button
            key={index}
            className='player-board_option-card' 
            disabled={props.disableOptions}
            onClick={() => onSelecOption(option)}>
            <img 
              className='player-board_option-img'
              src={
                option === 'piedra' ? 
                  FistImg 
                : option === 'papel' ? PaperImg : ShearsImg}
              alt={option}
            />
          </button>  
        ))}
      </div>
    </section>
  )
}
