import { Box } from "./box";
import { Player } from "./player";

export class Game {
  player1: Player | undefined;
  player2: Player | undefined;
  currentPlayerTurn: number = 0;
  gameFinished: boolean = false;
  board: Array<Array<Box>> = [[], [], []];

  constructor() {
    this.currentPlayerTurn = 1;
  }
}
