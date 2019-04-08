import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { getBoardOrder, getCanvArray } from './demo.utils';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  helpOpen: boolean = false;
  innerDiv: number;
  landscape: boolean;
  gameOver: boolean;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  timer = 2500;
  pic = new Image();
  canvArray: Array<any>;
  boardOrder: Array<number>;
  drawOrder: Array<number>;

  constructor(
    private breakpointObserver: BreakpointObserver
  ) { }

  ngOnInit() {

    this.breakpointObserver
      .observe(['(min-width: 768px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.landscape = true;
          this.innerDiv = 410;
        } else {
          this.landscape = false;
          this.innerDiv = 380;
        }
      });
    this.canvas = document.querySelector('canvas');
    this.ctx = this.canvas.getContext('2d');

    this.canvArray = getCanvArray(7, 5);
    [this.boardOrder, this.drawOrder] = getBoardOrder(35);
    this.useCanvas(this.drawOrder);

  }


  // resetGame(e) {
  //   console.log(e);
  //   this.gameOver = false;
  //   sessionStorage.clear();
  //   this.ctx.clearRect(0, 0, 410, 574);
  //
  //
  //   this.getBoard();
  //   this.getBoardOrder();
  //   this.useCanvas(this.board[1]);
  //
  //   console.log(this.board, this.boardOrder);
  // }


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



  helpBtnHandler() {
    this.helpOpen = !this.helpOpen;
    console.log(this.helpOpen);
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
