import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  width_tiles: number;
  width_pixels: number;
  height_tiles: number;
  height_pixels: number;



  tileWidth = 0;
  tileHeight = 0;
  hasLeftoverPxWide: boolean;
  hasLeftoverPxHigh: boolean;
  codeReady: boolean;



  constructor() { }

  ngOnInit() {
  }

  updateWidthProps() {
    this.tileWidth = this.width_pixels / this.width_tiles;
    this.hasLeftoverPxWide = this.width_pixels % this.width_tiles !== 0;
    this.codeReady = this.width_pixels > 0 && this.height_pixels > 0 && this.tileWidth === this.tileHeight && !this.hasLeftoverPxHigh && !this.hasLeftoverPxWide;
  }

  updateHeightProps() {
    this.tileHeight = this.height_pixels / this.height_tiles;
    this.hasLeftoverPxHigh = this.height_pixels % this.height_tiles !== 0;
    this.codeReady = this.width_pixels > 0 && this.height_pixels > 0 && this.tileWidth === this.tileHeight && !this.hasLeftoverPxHigh && !this.hasLeftoverPxWide;
  }

  handleWidthTiles(e) {
    console.log(e);
    this.width_tiles = e;
    this.updateWidthProps();
  }

  handleWidthPixels(e) {
    console.log(e);
    this.width_pixels = e;
    this.updateWidthProps();
  }

  handleHeightTiles(e) {
    console.log(e);
    this.height_tiles = e;
    this.updateHeightProps();
  }

  handleHeightPixels(e) {
    console.log(e);
    this.height_pixels = e;
    this.updateHeightProps();
  }

}
