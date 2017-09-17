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

  addMarker(lat: number, lng: number): void {
    let marker = new google.maps.Marker({
      position: new google.maps.LatLng(lat,lng),
      map: this.map
    });
  }
}