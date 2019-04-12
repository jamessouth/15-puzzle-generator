import { Component, OnInit, Input } from '@angular/core';
import { OptionsService } from '../../../options.service';

@Component({
  selector: 'app-code-css',
  templateUrl: './code-css.component.html',
  styleUrls: ['./code-css.component.scss']
})
export class CodeCssComponent implements OnInit {
  @Input() widthInPixels: number;

  color: string;

  constructor(private data: OptionsService) { }

  ngOnInit() {
    this.data.currentColor$.subscribe(color => this.color = color);
  }

}
