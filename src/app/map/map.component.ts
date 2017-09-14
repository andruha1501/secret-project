import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, NgZone } from '@angular/core';
import {} from '@types/googlemaps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @Input('lat') public lat: number;
  @Input('lng') public lng: number;
  @Output() onClick = new EventEmitter;
  @ViewChild('mapContainer') mapContainer: ElementRef;

  public map: google.maps.Map;
  public markers: google.maps.Marker[] = [];

  constructor() { }

  ngOnInit() {
    let latlng = new google.maps.LatLng(this.lat,this.lng);
    this.map = new google.maps.Map(this.mapContainer.nativeElement,{
      center: latlng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true,
      zoomControl: true
    });

  }

  public addMarker(lat: number, lng: number) {
    let marker = new google.maps.Marker({
      position: new google.maps.LatLng(lat,lng),
      map: this.map
    });

    this.markers.push(marker);
  }

}
