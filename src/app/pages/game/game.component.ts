import { Component, OnInit } from '@angular/core';
import { Player } from '../../elements/player';
import { Box } from '../../elements/box';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  player1: Player = new Player('Jugador 1', 'X');
  player2: Player = new Player('Jugador 2', '0');
  currentPlayerTurn: number = 0;
  gameFinished: boolean = false;
  boardBoxes: Array<Box> = [];

  constructor() {
    this.currentPlayerTurn = 1;
  }

  ngOnInit(): void {
    this.initializeBoard();

  }

  initializeBoard() {
    this.boardBoxes = [
      new Box(0, 0, 'top-left-border-rounded'),
      new Box(0, 1,),
      new Box(0, 2, 'top-right-border-rounded'),
      new Box(1, 0,),
      new Box(1, 1,),
      new Box(1, 2,),
      new Box(2, 0, 'bottom-left-border-rounded'),
      new Box(2, 1,),
      new Box(2, 2, 'bottom-right-border-rounded')];
  }

  isValidMove(x: number, y: number) {
    return x >= 0 && x <= 2 && y >= 0 && y <= 2;
  }

  registerMove(x: number, y: number) {
    const clickedBoxId = `${x}_${y}`;
    let box = this.boardBoxes.find(x => x.id === clickedBoxId);

    if (!this.gameFinished) {
      if (this.currentPlayerTurn === 1) {
        box?.setCross();
        this.currentPlayerTurn = 2;
      } else {
        box?.setZero();
        this.currentPlayerTurn = 1;
      }

      setTimeout(() => {

        if (this.didGameFinished()) {
          this.setGameAsFinished();
          this.showWinner();

          if (confirm('Le gustaria jugar otra partida')) {
            this.restartGame();
          } else {
            history.back();
          }
        }
      }, 10);


    }


  }

  didGameFinished() {
    return (
      this.didThisPlayerWon(this.player1.symbol) ||
      this.didThisPlayerWon(this.player2.symbol)
    );
  }


  didThisPlayerWon(playerSymbol: string) {
    const topRow = this.boardBoxes[0].content === playerSymbol &&
      this.boardBoxes[1].content === playerSymbol &&
      this.boardBoxes[2].content === playerSymbol;

    const middleRow = this.boardBoxes[3].content === playerSymbol &&
      this.boardBoxes[4].content === playerSymbol &&
      this.boardBoxes[5].content === playerSymbol;

    const bottomRow = this.boardBoxes[6].content === playerSymbol &&
      this.boardBoxes[7].content === playerSymbol &&
      this.boardBoxes[8].content === playerSymbol;


    const leftColumn = this.boardBoxes[0].content === playerSymbol &&
      this.boardBoxes[3].content === playerSymbol &&
      this.boardBoxes[6].content === playerSymbol;

    const middleColumn = this.boardBoxes[1].content === playerSymbol &&
      this.boardBoxes[4].content === playerSymbol &&
      this.boardBoxes[7].content === playerSymbol;

    const rightColumn = this.boardBoxes[2].content === playerSymbol &&
      this.boardBoxes[5].content === playerSymbol &&
      this.boardBoxes[8].content === playerSymbol;

    const leftRightDiagonal = this.boardBoxes[0].content === playerSymbol &&
      this.boardBoxes[4].content === playerSymbol &&
      this.boardBoxes[8].content === playerSymbol;

    const rightLeftDiagonal = this.boardBoxes[2].content === playerSymbol &&
      this.boardBoxes[4].content === playerSymbol &&
      this.boardBoxes[6].content === playerSymbol;

    const winnerPositions = [
      topRow,
      middleRow,
      bottomRow,
      leftColumn,
      middleColumn,
      rightColumn,
      leftRightDiagonal,
      rightLeftDiagonal,
    ];

    return winnerPositions.some((w) => w);
  }

  setGameAsFinished() {
    this.gameFinished = true;
  }


  showWinner() {
    if (this.didThisPlayerWon(this.player1.symbol)) {
      alert(`${this.player1.id} ganó!!!!`);
    } else {
      alert(`${this.player2.id} ganó!!!!`);
    }
  }

  restartGame() {
    this.initializeBoard();
    this.gameFinished = false;
  }



}
