import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, NgZone } from '@angular/core';
import {} from '@types/googlemaps';
import { MapService } from '../services/map.service';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  @Input('lat') public lat: number;
  @Input('lng') public lng: number;
  @ViewChild('mapContainer') mapContainer: ElementRef;

  //public markers: google.maps.Marker[] = []; 
  
  constructor(private mapService: MapService) { }

  ngOnInit() {
    let latlng = new google.maps.LatLng(this.lat,this.lng);
    this.mapService.map = new google.maps.Map(this.mapContainer.nativeElement,{
      center: latlng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true,
      zoomControl: true
    });
    this.getData();
  }
  getData(): void {
    this.mapService
        .getData()
        .subscribe(markers => {
          for(var m of markers)
            this.mapService.addMarker(m.lat, m.lng);

        });
  }

}
