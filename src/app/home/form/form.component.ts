import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Output() width_tiles = new EventEmitter<number>();
  @Output() width_pixels = new EventEmitter<number>();
  @Output() height_tiles = new EventEmitter<number>();
  @Output() height_pixels = new EventEmitter<number>();
  @Output() color = new EventEmitter<string>();

  tileSize = null;
  heightRatio = null;
  nums = [2,3,4,5,6,7,8];

  constructor() { }

  ngOnInit() {
  }

  onWidthPixelsChange(val) {
    this.width_pixels.emit(val);
  }
  onWidthTilesChange(val) {
    this.width_tiles.emit(val);
  }
  onHeightPixelsChange(val) {
    this.height_pixels.emit(val);
  }
  onHeightTilesChange(val) {
    this.height_tiles.emit(val);
  }
  onColorChange(val) {
    this.color.emit(val);
  }



}
