import { useMemo, useState } from 'react';

import FistImg from '@assets/fist.png';
import PaperImg from '@assets/hello.png';
import ShearsImg from '@assets/peace.png';
import '@styles/playerBoard.style.css';

import { Option } from '@types';

interface PlayerBoardProps {
  onSelectOption?: () => void;
  display?: 'left' | 'right' ;
  player?: 'self' | 'pc';
}

const options: Option[] = ['piedra', 'papel', 'tijeras']

export const PlayerBoard = (props: PlayerBoardProps) => {
  const [selectedOption, setSelectedOption] = useState<Option>();
  
  const player = useMemo(() => (
    props.player === 'self' ? 'Tu' : 'PC'
  ), [props.player])

  const onSelecOption = (option: Option) => {
    setSelectedOption(option)
  }

  return (
    <section className={`${player === 'PC' ? 'player-board_reverse' : 'player-board'}`}>
      <section>
        <div className='player-board_options'>
          <p>{player}</p>
          {props.player === 'self' && <p>Selecciona una opción</p>}
          {options.map((option, index) => (
            <div
              key={index}
              className='player-board_option-card' 
              onClick={() => onSelecOption(option)}>
              <img 
                className='player-board_option-img'
                src={
                  option === 'piedra' ? 
                    FistImg 
                  : option === 'papel' ? PaperImg : ShearsImg}
                alt={option}
              />
            </div>  
          ))}
        </div>
      </section>
      <section>
        {selectedOption && (
          <div className='player-board_option-card'>
            <img 
                className='player-board_option-img'
                src={
                  selectedOption === 'piedra' ? 
                    FistImg 
                  : selectedOption === 'papel' ? PaperImg : ShearsImg}
                alt={selectedOption}
              />
            <p>{selectedOption}</p>
          </div>
        )}
      </section>
    </section>
  )
}
