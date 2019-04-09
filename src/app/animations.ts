import { trigger, style, group, query, animateChild, animate, transition } from '@angular/animations';

export const homeToDemoAnimation =
  trigger('homeToDemoAnimation', [
    transition('HomePage => DemoPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          right: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ right: '-100%'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('1100ms 200ms ease-in-out', style({ right: '100%'}))
        ]),
        query(':enter', [
          animate('1100ms 200ms ease-in-out', style({ right: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
  ]);

export const demoToHomeAnimation =
  trigger('demoToHomeAnimation', [
    transition('DemoPage => HomePage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ left: '100%'}))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
  ]);
