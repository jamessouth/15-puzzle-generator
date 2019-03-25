import { Component, OnInit, Input } from '@angular/core';
import { OptionsService } from '../../options.service';

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

  color: string;
  path: string;

  constructor(private data: OptionsService) { }

  ngOnInit() {
    this.data.currentColor$.subscribe(color => this.color = color);
    this.data.currentPath$.subscribe(path => this.path = path);
  }

}
