import canvArray from './canvArray';

export default class Game {

  public _gameOver = false;
  private _pic: HTMLImageElement = new Image();

  private setDrawOrder(arr: Array<number>) {
    const drawOrder = [];
    arr.forEach((x, i) => {
      drawOrder[x] = i;
    });
    this._drawOrder = drawOrder;
  }

  constructor(
    private _ctx: CanvasRenderingContext2D,
    private _boardOrder: Array<number>,
    private _drawOrder: Array<number>
  ) {
    this._pic.onload = () => {
      for (let i = 0; i < canvArray.length - 1; i++) {
        this._ctx.drawImage(
          this._pic,
          canvArray[i][0],
          canvArray[i][1],
          82,
          82,
          canvArray[this._drawOrder[i]][0],
          canvArray[this._drawOrder[i]][1],
          82,
          82
        );
      }
    };
    this._pic.src = '../../mucha.jpg';
    // this.pic.src = 'mucha.697365d6cee2963eb18f.jpg';
  }

  saveGame(): void {
    this.setDrawOrder(this._boardOrder);
    const payload: string = JSON.stringify([this._boardOrder, this._drawOrder, this._gameOver]);
    sessionStorage.setItem('savedGame', payload);
  }

  private _isInvalidTile(tile, blank): boolean {
    if (blank % 5 === 0) {
      if (![-5, 1, 5].includes(tile - blank)) {
        return true;
      }
    } else if ((blank + 1) % 5 === 0) {
      if (![-5, -1, 5].includes(tile - blank)) {
        return true;
      }
    } else {
      if (![1, 5].includes(Math.abs(tile - blank))) {
        return true;
      }
    }
  }

  private _updateCanvas(tile, ind, blank): void {
    this._ctx.clearRect(
      canvArray[tile][0],
      canvArray[tile][1],
      82,
      82
    );
    this._ctx.drawImage(
      this._pic,
      canvArray[ind][0],
      canvArray[ind][1],
      82,
      82,
      canvArray[blank][0],
      canvArray[blank][1],
      82,
      82
    );
  }

  private _updateBoardOrder(tile, blank): void {
    [this._boardOrder[tile], this._boardOrder[blank]] = [this._boardOrder[blank], this._boardOrder[tile]];
  }

  swapTiles(x, y): void {
    if (this._gameOver) { return; }
    const tileClicked = (Math.floor(y / 82) * 5) + Math.floor(x / 82);
    const blank = this._boardOrder.indexOf(canvArray.length - 1);
    if (this._isInvalidTile(tileClicked, blank)) { return; }
    let interimCheck;
    const brdInd = this._boardOrder[tileClicked];
    this._updateCanvas(tileClicked, brdInd, blank);
    this._updateBoardOrder(tileClicked, blank);
    if (this._boardOrder[0] === 0 && this._boardOrder[4] === 4 && this._boardOrder[29] === 29 && this._boardOrder[33] === 33) {
      interimCheck = this.checkForWin(this._boardOrder);
    }
    if (interimCheck) {
      this._ctx.drawImage(this._pic, 328, 492, 82, 82, 328, 492, 82, 82);
      this._gameOver = true;
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

}
