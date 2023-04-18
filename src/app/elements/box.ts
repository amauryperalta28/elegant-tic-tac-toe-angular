export class Box {
  content: string = '';
  id: string = '';

  constructor(public x: number, public y: number, public borderRadiusClass: string = '') {
    this.id = `${this.x}_${this.y}`;
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

}
