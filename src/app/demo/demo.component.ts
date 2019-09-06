import { Component, OnInit, OnDestroy } from '@angular/core';
import getBoardOrder from './demo.utils';
import Game from './game';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit, OnDestroy {

  showReset = false;
  helpOpen = false;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  pic: HTMLImageElement = new Image();
  game: Game;

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
          this.pic.onload = () => {
            this.ctx.drawImage(this.pic, 0, 0);
          };
          this.pic.src = '../../mucha.jpg';
          // this.pic.src = 'mucha.697365d6cee2963eb18f.jpg';
          this.showReset = true;
          break;
        case false:
          this.game = new Game(
            this.ctx,
            payload[0],
            payload[1]
          );
          break;
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
    if (this.game) {
      this.game.saveGame();
    }
  }

  resetGame() {
    this.showReset = false;
    sessionStorage.clear();
    this.ctx.clearRect(0, 0, 410, 574);
    const [boardOrder, drawOrder] = getBoardOrder(35);
    this.game = new Game(
      this.ctx,
      boardOrder,
      drawOrder
    );
  }

}
