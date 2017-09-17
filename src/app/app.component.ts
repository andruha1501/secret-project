import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
declare let google: any;
declare let map: any;

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
      transition('right <=> left', animate('500ms ease-out'))
    ])
  ]
})
export class AppComponent implements OnInit {

  viewListTitle = 'Посмотреть лист';
  state: string = 'right';



  ngOnInit() {
  }
  
  toggleState(): void {
    if(this.state === 'right') {
      this.state = 'left';
      this.viewListTitle = 'Спрятать лист';
    }
    else {
      this.state = 'right';
      this.viewListTitle = 'Посмотреть лист';
    }

    let infoWindow = new google.maps.InfoWindow;

  }
}
