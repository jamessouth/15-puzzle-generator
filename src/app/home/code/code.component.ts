import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent implements OnInit {
  @Input() width: number;
  @Input() height: number;
  @Input() color: string;

  constructor() { }

  ngOnInit() {
  }

}
