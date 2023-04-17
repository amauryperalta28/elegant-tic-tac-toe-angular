export class Box {
  content: string = '';

  constructor(public x: number, public y: number, public borderRadiusClass: string = '') {

  }

  setCross() {
    this.content = 'X';
  }

  setZero() {
    this.content = '0';

  }

  getContent() {
    return this.content;
  }

  getId(){
    return `${this.x}_${this.y}`;
  }

}
