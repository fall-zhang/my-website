export type CellState = 'hidden' | 'revealed' | 'flagged'

export interface Cell {
  row: number;
  col: number;
  isMine: boolean;
  adjacentMines: number;
  state: CellState;
}

export type Board = Cell[][]

export type GameStatus = 'idle' | 'playing' | 'won' | 'lost'

export interface GameState {
  board: Board;
  status: GameStatus;
  flags: number;
  time: number;
}

export type GameAction =
  | { type: 'START'; row: number; col: number } |
  { type: 'REVEAL'; row: number; col: number } |
  { type: 'FLAG'; row: number; col: number } |
  { type: 'TICK' } |
  { type: 'RESET' }
