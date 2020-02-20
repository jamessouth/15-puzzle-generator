import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { OptionsService } from '../../options.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() tileWidth: number;
  @Input() tileHeight: number;
  @Input() hasLeftoverPxWide: boolean;
  @Input() hasLeftoverPxHigh: boolean;

  @Output() widthInTiles = new EventEmitter<number>();
  @Output() widthInPixels = new EventEmitter<number>();
  @Output() heightInTiles = new EventEmitter<number>();
  @Output() heightInPixels = new EventEmitter<number>();
  @Output() inView = new EventEmitter<boolean>();

  @ViewChild('sent', {static: true}) sentinel;

  nums = [2, 3, 4, 5, 6, 7, 8];
  color: string;
  path: string;
  helperImage: boolean;
  intObsFunc = function(entries, observer) {
     if (entries[0].isIntersecting) {
       this.inView.emit(true);
       observer.unobserve(entries[0].target);
     }
  }; // tslint:disable-next-line
  observer = new IntersectionObserver(
    this.intObsFunc.bind(this),
    {
      root: null,
      rootMargin: '0px 0px 40px 0px',
      threshold: 0.1,
    }
  );

  constructor(private data: OptionsService) {}

  ngOnInit() {
    this.data.currentColor$.subscribe(color => this.color = color);
    this.data.currentPath$.subscribe(path => this.path = path);
    this.data.currentHelpImg$.subscribe(helperImage => this.helperImage = helperImage);
    this.observer.observe(this.sentinel.nativeElement);
  }

  onWidthPixelsChange(val) {
    this.widthInPixels.emit(val);
  }

  onWidthTilesChange(val) {
    this.widthInTiles.emit(val);
  }

  onHeightPixelsChange(val) {
    this.heightInPixels.emit(val);
  }

  onHeightTilesChange(val) {
    this.heightInTiles.emit(val);
  }

  onColorChange(val) {
    this.data.changeColor(val);
  }

  onPathChange(val) {
    this.data.changePath(val);
  }

  onHelpImgChange(val) {
    this.data.changeHelpImg(val);
  }

}
