import { Component, OnInit, Input } from '@angular/core';
import { OptionsService } from '../../../options.service';

@Component({
  selector: 'app-code-js',
  templateUrl: './code-js.component.html',
  styleUrls: ['./code-js.component.scss']
})
export class CodeJsComponent implements OnInit {
  @Input() tileWidth: number;
  @Input() width_tiles: number;
  @Input() height_tiles: number;

  path: string;

  constructor(private data: OptionsService) { }

  ngOnInit() {
    this.data.currentPath$.subscribe(path => this.path = path);
  }

}
