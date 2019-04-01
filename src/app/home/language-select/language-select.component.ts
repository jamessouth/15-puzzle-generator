import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-language-select',
  templateUrl: './language-select.component.html',
  styleUrls: ['./language-select.component.scss']
})
export class LanguageSelectComponent implements OnInit {
  @Input() codeReady: boolean;

  currentIndex = 0;
  languages = ['HTML', 'CSS', 'JS'];
  currentLang = this.languages[this.currentIndex % 3];

  constructor() { }

  ngOnInit() {
  }



  changeLang(dir: string) {
    if (dir === 'r') {
      this.currentIndex++;
    } else {
      this.currentIndex--;
      if (this.currentIndex < 0) {
          this.currentIndex = 2;
        }
    }
  }



}
