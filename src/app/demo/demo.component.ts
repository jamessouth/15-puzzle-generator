import { Component, OnInit, OnDestroy } from '@angular/core';
import { getBoardOrder } from './demo.utils';
import canvArray from './canvArray';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit, OnDestroy {

  // gameOver: boolean;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  // pic = new Image();
  // boardOrder: Array<number>;
  // drawOrder: Array<number>;

  constructor() {}

  ngOnInit() {
    this.canvas = document.querySelector('canvas');
    this.ctx = this.canvas.getContext('2d');
    let payload: [Array<number>, Array<number>, string];
    try {
      payload = JSON.parse(sessionStorage.getItem('payload'));
    } catch (e) {
      sessionStorage.removeItem('payload');
    }
    switch (status) {
      case '0':
        // do something
        break;
      case '1':
        // do something
        break;
      case '2':
        // do something
        break;
      default:
        // joijoijoijo

    }


      if (this.checkForWin(game)) {
        // just draw the image, game already won
        // this.useCanvas(drawOrder, 0);
        // this.gameOver = true;
      } else {
      // continue previous game
        this.useCanvas(drawOrder, 1);
      }

      // new game
      [this.boardOrder, this.drawOrder] = getBoardOrder(35);
      this.useCanvas(this.drawOrder, 1);

  }

  ngOnDestroy() {
    this.saveGame(this.boardOrder);
  }

}
