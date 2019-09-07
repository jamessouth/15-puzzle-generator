import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-code-css-helper-image',
  templateUrl: './code-css-helper-image.component.html'
})
export class CodeCssHelperImageComponent implements OnInit {
  @Input() widthInPixels: number;

  constructor() { }

  ngOnInit() {}

}
