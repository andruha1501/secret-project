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
    /*let map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      scrollwheel: true,
      zoom: 16
    });

    let infoWindow = new google.maps.InfoWindow;

    if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('This is you.');
            infoWindow.open(map);
            map.setCenter(pos);
      });
    }*/
  }
  toggleState(): void {
    this.state = (this.state === 'right' ? 'left' : 'right');
  }
}
