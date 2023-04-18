import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit {

  @Input() x: number = 0;
  @Input() y: number = 0;
  @Input() content: string = ''
  @Input() borderRadiusClass = '';
  @Output() onBoxClick: EventEmitter<boolean> = new EventEmitter<boolean>;

  id: string = '';

  ngOnInit(): void {
    this.id = `${this.x}_${this.y}`;
  }

  notifyBoxWasClicked(): void {
    this.onBoxClick.emit(true);
  }


}
