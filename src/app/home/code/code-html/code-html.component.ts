import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-code-html',
  templateUrl: './code-html.component.html',
  styleUrls: ['./code-html.component.scss']
})
export class CodeHtmlComponent implements OnInit {
  @Input() widthInPixels: number;
  @Input() heightInPixels: number;

  constructor() { }

  ngOnInit() {}

}
