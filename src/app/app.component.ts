import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { homeToDemoAnimation, demoToHomeAnimation } from './animations';

@Component({
  selector: 'app-root',
  template: '<div [@homeToDemoAnimation]="prepareRoute(outlet)" [@demoToHomeAnimation]="prepareRoute(outlet)"><router-outlet #outlet="outlet"></router-outlet></div>',
  styleUrls: ['./app.component.scss'],
  animations: [
    homeToDemoAnimation,
    demoToHomeAnimation
  ]
})
export class AppComponent {
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
