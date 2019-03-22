import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  width: number;
  height: number;
  color: string;

  constructor() { }

  ngOnInit() {
  }

  handleWidth(e) {
    console.log(e);
    this.width = e;
  }

  handleHeight(e) {
    console.log(e);
    this.height = e;
  }

  handleColor(e) {
    this.color = e;
  }

}
