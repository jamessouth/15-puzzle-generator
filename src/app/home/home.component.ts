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
  color: string;

  constructor() { }

  ngOnInit() {
  }

  handleWidthTiles(e) {
    console.log(e);
    this.width_tiles = e;
  }

  handleWidthPixels(e) {
    console.log(e);
    this.width_pixels = e;
  }

  handleHeightTiles(e) {
    console.log(e);
    this.height_tiles = e;
  }

  handleHeightPixels(e) {
    console.log(e);
    this.height_pixels = e;
  }

  handleColor(e) {
    this.color = e;
  }

}
