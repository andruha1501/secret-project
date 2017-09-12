import { Component, OnInit, Input } from '@angular/core';
import { PartyService } from './services/party.service';
import { Party } from './classes/party';
declare let google: any;
declare let map: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  parties: Party[] = [];
  party_location: Location[] = [];

  constructor(private partyService: PartyService) { }

  onClick() {

    this.parties = this.partyService.getData();

    map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: -25.363, lng: 131.044 },
      scrollwheel: true,
      zoom: 16
    });
    for (let item of this.parties) {
      let marker = new google.maps.Marker({
        map: map,
        position: { lat: -25.363, lng: 131.044 },
        title: item.title
      });
    }
  }

  ngOnInit() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: -25.363, lng: 131.044 },
      scrollwheel: true,
      zoom: 16
    });

    this.parties = this.partyService.getData();

    for (let item of this.parties) {
      let marker = new google.maps.Marker({
        map: map,
        position: { lat: item.lan1, lng: item.lan2 },
        title: item.title
      });
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        let pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        infoWindow.setPosition(pos);
        infoWindow.setContent('This is you.');
        infoWindow.open(map);
        map.setCenter(pos);
      });
    }

    let infoWindow = new google.maps.InfoWindow;

  }
}
