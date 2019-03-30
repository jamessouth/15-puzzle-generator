import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OptionsService } from '../../options.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() tileWidth: number;
  @Input() tileHeight: number;
  @Input() hasLeftoverPxWide: boolean;
  @Input() hasLeftoverPxHigh: boolean;

  @Output() width_tiles = new EventEmitter<number>();
  @Output() width_pixels = new EventEmitter<number>();
  @Output() height_tiles = new EventEmitter<number>();
  @Output() height_pixels = new EventEmitter<number>();

  nums = [2,3,4,5,6,7,8];
  color: string;
  path: string;
  helper_image: boolean;

  constructor(private data: OptionsService) { }

  ngOnInit() {
    this.data.currentColor$.subscribe(color => this.color = color);
    this.data.currentPath$.subscribe(path => this.path = path);
    this.data.currentHelpImg$.subscribe(helper_image => this.helper_image = helper_image);
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
    this.data.changeColor(val);
  }
  onPathChange(val) {
    this.data.changePath(val);
  }
  onHelpImgChange(val) {
    this.data.changeHelpImg(val);
  }



}
