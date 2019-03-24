import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent implements OnInit {
  @Input() width_tiles: number;
  @Input() width_pixels: number;
  @Input() height_tiles: number;
  @Input() height_pixels: number;
  @Input() color: string;

  constructor() { }

  ngOnInit() {
  }

}
