import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  widthInTiles: number;
  widthInPixels: number;
  heightInTiles: number;
  heightInPixels: number;
  tileWidth = 0;
  tileHeight = 0;
  hasLeftoverPxWide: boolean;
  hasLeftoverPxHigh: boolean;
  codeReady: boolean;
  inView: boolean;

  constructor() {}

  ngOnInit() {}

  updateWidthProps() {
    this.tileWidth = this.widthInPixels / this.widthInTiles;
    this.hasLeftoverPxWide = this.widthInPixels % this.widthInTiles !== 0;
    this.codeReady = this.widthInPixels > 0 && this.heightInPixels > 0 &&
      this.tileWidth === this.tileHeight && !this.hasLeftoverPxHigh && !this.hasLeftoverPxWide;
  }

  updateHeightProps() {
    this.tileHeight = this.heightInPixels / this.heightInTiles;
    this.hasLeftoverPxHigh = this.heightInPixels % this.heightInTiles !== 0;
    this.codeReady = this.widthInPixels > 0 && this.heightInPixels > 0 &&
      this.tileWidth === this.tileHeight && !this.hasLeftoverPxHigh && !this.hasLeftoverPxWide;
  }

  handleWidthTiles(e) {
    this.widthInTiles = e;
    this.updateWidthProps();
  }

  handleWidthPixels(e) {
    this.widthInPixels = e;
    this.updateWidthProps();
  }

  handleHeightTiles(e) {
    this.heightInTiles = e;
    this.updateHeightProps();
  }

  handleHeightPixels(e) {
    this.heightInPixels = e;
    this.updateHeightProps();
  }

}
