import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Output() width = new EventEmitter<number>();
  @Output() height = new EventEmitter<number>();

  tileSize = null;
  heightRatio = null;
  nums = [2,3,4,5,6,7,8];

  constructor() { }

  ngOnInit() {
  }


  onChange(val) {
    this.width.emit(val);
  }


}
