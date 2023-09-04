import { GameStatus, Option, TypesOfPlayers } from "./objects.types";

export interface ScoreBoardProps {
  score1: number;
  score2: number;
}

export interface PlayerBoardProps {
  onSelectOption?: (option: Option) => void;
  player: TypesOfPlayers;
  reset?: boolean;
  disableOptions?: boolean;
  selectedOption?: Option;
}

export interface GameEventsProps {
  pcSelectedOption?: Option;
  playerSelectedOption?: Option;
  gameStatus?: GameStatus;
  showResult?: boolean;
  showChoises?: boolean;
}

export interface ParagraphPros {
  value: string | number;
  title?: boolean;
  subTitle?: boolean;
  body?: boolean;
  className?: string;
  bold?: boolean
  center?: boolean;
}