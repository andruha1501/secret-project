import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from "rxjs/Observable";
interface Markers {
  lat: number,
  lng: number
}

@Injectable()
export class MapService {
  //markers: google.maps.Marker[] = []; 
  map: google.maps.Map;
  constructor(private http: HttpClient) { 
   
  }

  
  getData(): Observable<any> {
    return this.http.get<Markers>('../../assets/markers.json');
  }

  addMarker(lat: number, lng: number, hidden?: boolean): void {
    if(hidden) {
      new google.maps.Circle({
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35,
        map: this.map,
        center: {lat: lat, lng: lng},
        radius: 100
      })
    } 
    else {
      let marker = new google.maps.Marker({
        position: new google.maps.LatLng(lat,lng),
        map: this.map
      });
    }
  }
}