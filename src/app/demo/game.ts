export default class Game {

  private _gameOver: boolean;
  private _pic: HTMLImageElement = new Image();

  constructor(
    private _ctx: CanvasRenderingContext2D,
    private _boardOrder: Array<number>,
    private _drawOrder: Array<number>,

  ) {}

  static saveGame(arr): void {
    const savedGame = JSON.stringify(arr);
    sessionStorage.setItem('boardOrder', savedGame);
  }

  static resetGame() {
    this.gameOver = false;
    sessionStorage.clear();
    this.ctx.clearRect(0, 0, 410, 574);
    [this.boardOrder, this.drawOrder] = getBoardOrder(35);
    this.useCanvas(this.drawOrder, 1);
  }

  swapTiles(x, y) {
    if (this.gameOver) { return; }
    const tileClicked = (Math.floor(y / 82) * 5) + Math.floor(x / 82);
    const blank = this.boardOrder.indexOf(canvArray.length - 1);
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
    const brdInd = this.boardOrder[tileClicked];
    this.ctx.clearRect(canvArray[tileClicked][0], canvArray[tileClicked][1], 82, 82);
    this.ctx.drawImage(
      this.pic,
      canvArray[brdInd][0],
      canvArray[brdInd][1],
      82,
      82,
      canvArray[blank][0],
      canvArray[blank][1],
      82,
      82
    );
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
      for (let i = 0; i < canvArray.length - gameFinished; i++) {
        this.ctx.drawImage(
          this.pic,
          canvArray[i][0],
          canvArray[i][1],
          82,
          82,
          canvArray[arr[i]][0],
          canvArray[arr[i]][1],
          82,
          82
        );
      }
    };
    this.pic.src = '../../mucha.jpg';
    // this.pic.src = 'mucha.697365d6cee2963eb18f.jpg';


  }


}
