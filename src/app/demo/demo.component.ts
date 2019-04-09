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

  constructor() { }

  ngOnInit() {


    // let gameAlreadyWon;
    // if(sessionStorage.getItem('gameOver')){
    //   try{
    //     gameAlreadyWon = sessionStorage.getItem('gameOver');
    //   } catch(e) {
    //     sessionStorage.removeItem('gameOver');
    //   }
    // }

    // if (gameAlreadyWon) {
    //   this.gameOver = true;
    //   this.pic.onload = () => {
    //     this.ctx.drawImage(this.pic, 0, 0);
    //   }
    //   this.pic.src = "../../assets/images/mucha.jpg";
    // } else {

    this.canvArray = getCanvArray(7, 5);
    this.canvas = document.querySelector('canvas');
    this.ctx = this.canvas.getContext('2d');
    let game;
    if(sessionStorage.getItem('boardOrder')){
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
      this.useCanvas(drawOrder);
    } else {


      [this.boardOrder, this.drawOrder] = getBoardOrder(35);
      this.useCanvas(this.drawOrder);
    }


  }

  ngOnDestroy() {

    this.saveGame(this.boardOrder);

  }



  saveGame(arr): void {
    const savedGame = JSON.stringify(arr);
    sessionStorage.setItem('boardOrder', savedGame);
  }

  // getSavedGame() {
  //
  //     return game;
  //   }


  resetGame() {
    this.gameOver = false;
    sessionStorage.clear();
    this.ctx.clearRect(0, 0, 410, 574);

    [this.boardOrder, this.drawOrder] = getBoardOrder(35);
    this.useCanvas(this.drawOrder);
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
    let finalCheck;
    let brdInd = this.boardOrder[tileClicked];
    this.ctx.clearRect(this.canvArray[tileClicked][0], this.canvArray[tileClicked][1], 82, 82);
    this.ctx.drawImage(this.pic, this.canvArray[brdInd][0], this.canvArray[brdInd][1], 82, 82, this.canvArray[blank][0], this.canvArray[blank][1], 82, 82);
    [this.boardOrder[tileClicked], this.boardOrder[blank]] = [this.boardOrder[blank], this.boardOrder[tileClicked]];
    if(this.boardOrder[0] === 0 && this.boardOrder[4] === 4 && this.boardOrder[29] === 29 && this.boardOrder[33] === 33){
      finalCheck = true;
      for(let f = 0; f < this.boardOrder.length; f++){
        if(this.boardOrder[f] !== f){
          finalCheck = false;
          break;
        }
      }
    }
    if(finalCheck){
      this.ctx.drawImage(this.pic, 328, 492, 82, 82, 328, 492, 82, 82);
      this.gameOver = true;
    }
  }




  useCanvas(arr) {
    this.pic.onload = () => {
      for(let i = 0; i < this.canvArray.length - 1; i++){
        this.ctx.drawImage(this.pic, this.canvArray[i][0], this.canvArray[i][1], 82, 82, this.canvArray[arr[i]][0], this.canvArray[arr[i]][1], 82, 82);
      }
    }
    this.pic.src = "../../assets/images/mucha.jpg";
  }




}
