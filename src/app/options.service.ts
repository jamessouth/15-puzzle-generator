import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OptionsService {
  private defaultColor = new BehaviorSubject('#0f8000');
  private defaultPath = new BehaviorSubject('');
  private defaultHelpImg = new BehaviorSubject(false);
  private defaultLang = new BehaviorSubject('HTML');

  currentColor$ = this.defaultColor.asObservable();
  currentPath$ = this.defaultPath.asObservable();
  currentHelpImg$ = this.defaultHelpImg.asObservable();
  currentLang$ = this.defaultLang.asObservable();

  changeLang(lang: string): void {
    this.defaultLang.next(lang);
  }

  changeColor(color: string): void {
    this.defaultColor.next(color);
  }

  changePath(path: string): void {
    this.defaultPath.next(path);
  }

  changeHelpImg(helperImage: boolean): void {
    this.defaultHelpImg.next(helperImage);
  }

}
