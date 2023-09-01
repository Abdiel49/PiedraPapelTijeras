export type Option = "piedra" | "papel" | "tijeras";

export type TypesOfPlayers = 'self' | 'pc';

export type GameScore = {
  pc: number;
  player: number;
}

export type PlayerMove = {
  player: TypesOfPlayers;
  optionSelected: Option;
}

// export type GameStatus = {
//   pc?: PlayerMove;
//   player?: PlayerMove;
// }

export type PlayerStatus = {
  score: number;
  selectedOption: Option | undefined;
}

export type GameStatus = 'PC Wins' | 'You Win' | 'Equal';