import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input() label;
  // @Output() value: EventEmitter<string> = new EventEmitter();
  nums = [2,3,4,5,6,7,8];

  constructor() { }

  ngOnInit() {
  }
  onChange(v) {
    console.log(v);
  }


}
