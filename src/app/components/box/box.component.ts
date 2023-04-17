import { Component, Input, OnInit } from '@angular/core';

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

  id: string = '';

  constructor() {

  }

  ngOnInit(): void {
    this.id = `${this.x}_${this.y}`;
  }


}
