import { Component, OnInit, Input } from '@angular/core';
import { OptionsService } from '../../options.service';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent implements OnInit {
  @Input() widthInTiles: number;
  @Input() widthInPixels: number;
  @Input() heightInTiles: number;
  @Input() heightInPixels: number;
  @Input() tileWidth: number;
  @Input() codeReady: boolean;

  color: string;
  path: string;
  helperImage: boolean;
  lang: string;

  constructor(private data: OptionsService) { }

  ngOnInit() {
    this.data.currentColor$.subscribe(color => this.color = color);
    this.data.currentPath$.subscribe(path => this.path = path);
    this.data.currentHelpImg$.subscribe(helperImage => this.helperImage = helperImage);
    this.data.currentLang$.subscribe(lang => this.lang = lang);
  }

}
