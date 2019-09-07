import { Component, OnInit, Input } from '@angular/core';
import { OptionsService } from '../../../options.service';

@Component({
  selector: 'app-code-html-helper-image',
  templateUrl: './code-html-helper-image.component.html'
})
export class CodeHtmlHelperImageComponent implements OnInit {

  path: string;

  constructor(private data: OptionsService) { }

  ngOnInit() {
    this.data.currentPath$.subscribe(path => this.path = path);
  }

}
