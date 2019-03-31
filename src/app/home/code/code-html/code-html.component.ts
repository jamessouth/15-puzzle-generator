import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-code-html',
  templateUrl: './code-html.component.html',
  styleUrls: ['./code-html.component.scss']
})
export class CodeHtmlComponent implements OnInit {
  @Input() width_pixels: number;
  @Input() height_pixels: number;


  constructor() { }

  ngOnInit() {
  }

}
