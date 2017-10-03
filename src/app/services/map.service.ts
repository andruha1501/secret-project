import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from "rxjs/Observable";
import { Party } from '../classes/party';

interface Markers {
  lat: number,
  lng: number
}

@Injectable()
export class MapService {
  markers: google.maps.Marker[] = [];
  map: google.maps.Map;
  constructor(private http: HttpClient) {

  }


  getData(): Observable<any> {
    return this.http.get<Markers>('../../assets/markers.json');
  }

  postData(party: any):any {
    console.log(party);
  }

  addMarker(lat: number, lng: number, hidden?: boolean): void {
    let marker: any
    if(hidden) {
       marker = new google.maps.Marker({
        label: "F",
        position: new google.maps.LatLng(lat+this.fakeCoords(),lng+this.fakeCoords()),
        map: this.map,
        title: 'Адрес не точный'
      });
    }
    else {
       marker = new google.maps.Marker({
        position: new google.maps.LatLng(lat,lng),
        map: this.map
      });
    }
    this.markers.push(marker);
  }

  fakeCoords(): number {
    let random = +Math.random().toFixed(3)/100;
    if(random > 0.005) {
      return random *= -1;
    }
    else {
      return random;
    }
  }
}
