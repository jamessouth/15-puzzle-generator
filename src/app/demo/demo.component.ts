import { Component, OnInit, OnDestroy } from '@angular/core';
import { getBoardOrder } from './demo.utils';
import Game from './game';


@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit, OnDestroy {

  // gameOver: boolean;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  // pic:
  game: Game;

  // boardOrder: Array<number>;
  // drawOrder: Array<number>;

  constructor() {}

  ngOnInit() {
    this.canvas = document.querySelector('canvas');
    this.ctx = this.canvas.getContext('2d');
    let payload;
    try {
      payload = JSON.parse(sessionStorage.getItem('savedGame'));
    } catch (e) {
      sessionStorage.removeItem('payload');
    }
    if (payload) {

      switch (payload[2]) {
        case true:
          // this.ctx.drawImage(this.pic, 0, 0);
          break;
        case false:
          console.log(payload);
          this.game = new Game(
            this.ctx,
            payload[0],
            payload[1]
          );

          break;
        // default:

      }
    } else {

      const [boardOrder, drawOrder] = getBoardOrder(35);
      this.game = new Game(
        this.ctx,
        boardOrder,
        drawOrder
      );

    }

  }

  ngOnDestroy() {
    this.game.saveGame();
  }

  swapTiles(x, y): void {
    this.game.swapTiles(x, y);
  }

  resetGame() {
    // this.gameOver = false;
    sessionStorage.clear();
    this.ctx.clearRect(0, 0, 410, 574);
    const [boardOrder, drawOrder] = getBoardOrder(35);
    this.game = new Game(
      this.ctx,
      boardOrder,
      drawOrder
    );
  };

}
