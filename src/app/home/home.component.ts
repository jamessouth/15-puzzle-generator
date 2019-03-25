import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  tileWidth = 0;
  tileHeight = 0;
  hasLeftoverPxWide: boolean;
  hasLeftoverPxHigh: boolean;
  width_tiles: number;
  width_pixels: number;
  height_tiles: number;
  height_pixels: number;



  constructor() { }

  ngOnInit() {
  }

  handleWidthTiles(e) {
    console.log(e);
    this.width_tiles = e;
    this.tileWidth = this.width_pixels / this.width_tiles;
    this.hasLeftoverPxWide = this.width_pixels % this.width_tiles !== 0;
  }

  handleWidthPixels(e) {
    console.log(e);
    this.width_pixels = e;
    this.tileWidth = this.width_pixels / this.width_tiles;
    this.hasLeftoverPxWide = this.width_pixels % this.width_tiles !== 0;
  }

  handleHeightTiles(e) {
    console.log(e);
    this.height_tiles = e;
    this.tileHeight = this.height_pixels / this.height_tiles;
    this.hasLeftoverPxHigh = this.height_pixels % this.height_tiles !== 0;
  }

  handleHeightPixels(e) {
    console.log(e);
    this.height_pixels = e;
    this.tileHeight = this.height_pixels / this.height_tiles;
    this.hasLeftoverPxHigh = this.height_pixels % this.height_tiles !== 0;
  }



}
