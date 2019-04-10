import { Component, OnInit, OnDestroy } from '@angular/core';
import { getBoardOrder, getCanvArray } from './demo.utils';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  helpOpen: boolean = false;
  gameOver: boolean;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  pic = new Image();
  canvArray: Array<any>;
  boardOrder: Array<number>;
  drawOrder: Array<number>;

  constructor() {}

  ngOnInit() {



    this.canvArray = getCanvArray(7, 5);
    this.canvas = document.querySelector('canvas');
    this.ctx = this.canvas.getContext('2d');


    let game;
    if (sessionStorage.getItem('boardOrder')) {
      try{
        game = JSON.parse(sessionStorage.getItem('boardOrder'));
      } catch(e){
        sessionStorage.removeItem('boardOrder');
      }
    }

    if (game) {
      this.boardOrder = game;
      let drawOrder = [];
      game.forEach((x, i) => {
        drawOrder[x] = i;
      });
      if (this.checkForWin(game)) {
        this.useCanvas(drawOrder, 0);
        this.gameOver = true;
      } else {
        this.useCanvas(drawOrder, 1);
      }
    } else {


      [this.boardOrder, this.drawOrder] = getBoardOrder(35);
      this.useCanvas(this.drawOrder, 1);
    }


  }

  ngOnDestroy() {

    this.saveGame(this.boardOrder);

  }

  saveGame(arr): void {
    const savedGame = JSON.stringify(arr);
    sessionStorage.setItem('boardOrder', savedGame);
  }


  resetGame() {
    this.gameOver = false;
    sessionStorage.clear();
    this.ctx.clearRect(0, 0, 410, 574);

    [this.boardOrder, this.drawOrder] = getBoardOrder(35);
    this.useCanvas(this.drawOrder, 1);
  }


  swapTiles(x, y) {

    if (this.gameOver) return;
    let tileClicked = (Math.floor(y / 82) * 5) + Math.floor(x / 82);
    let blank = this.boardOrder.indexOf(this.canvArray.length - 1);
    if (blank % 5 === 0) {
      if (![-5, 1, 5].includes(tileClicked - blank)) {
        return;
      }
    } else if ((blank + 1) % 5 === 0) {
      if (![-5, -1, 5].includes(tileClicked - blank)) {
        return;
      }
    } else {
      if (![1, 5].includes(Math.abs(tileClicked - blank))) {
        return;
      }
    }
    let interimCheck;
    let brdInd = this.boardOrder[tileClicked];
    this.ctx.clearRect(this.canvArray[tileClicked][0], this.canvArray[tileClicked][1], 82, 82);
    this.ctx.drawImage(this.pic, this.canvArray[brdInd][0], this.canvArray[brdInd][1], 82, 82, this.canvArray[blank][0], this.canvArray[blank][1], 82, 82);
    [this.boardOrder[tileClicked], this.boardOrder[blank]] = [this.boardOrder[blank], this.boardOrder[tileClicked]];



    if (this.boardOrder[0] === 0 && this.boardOrder[4] === 4 && this.boardOrder[29] === 29 && this.boardOrder[33] === 33) {
      interimCheck = this.checkForWin(this.boardOrder);
    }


    if (interimCheck) {
      this.ctx.drawImage(this.pic, 328, 492, 82, 82, 328, 492, 82, 82);
      this.gameOver = true;
    }

  }



  checkForWin(arr) {
    let finalCheck = true;
    for (let f = 0; f < arr.length; f++) {
      if (arr[f] !== f) {
        finalCheck = false;
        break;
      }
    }
    return finalCheck;
  }



  useCanvas(arr, gameFinished) {
    this.pic.onload = () => {
      for(let i = 0; i < this.canvArray.length - gameFinished; i++){
        this.ctx.drawImage(this.pic, this.canvArray[i][0], this.canvArray[i][1], 82, 82, this.canvArray[arr[i]][0], this.canvArray[arr[i]][1], 82, 82);
      }
    }
    this.pic.src = "../../assets/images/mucha.jpg";
  }




}
