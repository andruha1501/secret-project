import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
declare let google: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('arrow', [
      state('right', style({
        transform: 'rotate(0deg)'
      })),
      state('left',   style({
        transform: 'rotate(180deg)'
      })),
      transition('right <=> left', animate('100ms ease-out'))
    ])
  ]
})
export class AppComponent implements OnInit {
  title = 'app';
  state: string = "right";
  ngOnInit() {

  }
  toggleState(): void {
    this.state = (this.state === 'right' ? 'left' : 'right');
  }
}
