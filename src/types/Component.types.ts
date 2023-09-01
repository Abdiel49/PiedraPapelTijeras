import { Option, TypesOfPlayers } from "./objects.types";

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