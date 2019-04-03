import { Component, OnInit, Input } from '@angular/core';
import { OptionsService } from '../../options.service';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-language-select',
  templateUrl: './language-select.component.html',
  styleUrls: ['./language-select.component.scss']
})
export class LanguageSelectComponent implements OnInit {
  @Input() codeReady: boolean;

  currentIndex = 0;
  languages = ['HTML', 'CSS', 'JS'];
  lang: string;

  constructor(
    private data: OptionsService,
    private breakpointObserver: BreakpointObserver
  ) { }

  ngOnInit() {
    this.data.currentLang$.subscribe(lang => this.lang = lang);
    this.breakpointObserver
      .observe(['(min-width: 510px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.languages[2] = 'JavaScript';
        } else {
          this.languages[2] = 'JS';
        }
        this.data.changeLang(this.languages[this.currentIndex % 3]);
      });
  }



  onLangChange(dir: string) {
    if (dir === 'r') {
      this.currentIndex++;
    } else {
      this.currentIndex--;
      if (this.currentIndex < 0) {
          this.currentIndex = 2;
        }
    }
    this.data.changeLang(this.languages[this.currentIndex % 3]);
  }


}
