import { Component, OnInit } from '@angular/core';
import { Player } from '../../elements/player';
import { Box } from '../../elements/box';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  player1: Player | undefined;
  player2: Player | undefined;
  currentPlayerTurn: number = 0;
  gameFinished: boolean = false;
  boardBoxes: Array<Box> = [];

  constructor() {
    this.currentPlayerTurn = 1;
  }

  ngOnInit(): void {
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

}
