import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, NgZone } from '@angular/core';
import {} from '@types/googlemaps';
import { MapService } from '../services/map.service';
import { Party } from '../classes/party';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
 // @Input('lat') public lat: number;
 // @Input('lng') public lng: number;
  @ViewChild('mapContainer') mapContainer: ElementRef;

  parties: Party[] = [];
  //public markers: google.maps.Marker[] = [];

  constructor(private mapService: MapService) { }

  ngOnInit() {
    let latlng = new google.maps.LatLng(48.29257, 25.93585);
    this.mapService.map = new google.maps.Map(this.mapContainer.nativeElement,{
      center: latlng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true,
      zoomControl: true
    });
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        let pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
        this.mapService.map.setCenter(pos);
      });
    }
    this.getData();
  }

  getData(): void {
    this.mapService.getData().subscribe(res => {
      this.parties = res.data;
      for (let m of this.parties) {
        this.mapService.addMarker(m.lan1, m.lan2, m.private_adress);
      }
    });

  }
}
