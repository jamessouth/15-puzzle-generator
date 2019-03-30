import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class OptionsService {
  private defaultColor = new BehaviorSubject('#0f8000');
  private defaultPath = new BehaviorSubject('');
  private defaultHelpImg = new BehaviorSubject(false);

  currentColor$ = this.defaultColor.asObservable();
  currentPath$ = this.defaultPath.asObservable();
  currentHelpImg$ = this.defaultHelpImg.asObservable();

  changeColor(color: string): void {
    this.defaultColor.next(color);
  }
  changePath(path: string): void {
    this.defaultPath.next(path);
  }
  changeHelpImg(helper_image: boolean): void {
    this.defaultHelpImg.next(helper_image);
  }
}
