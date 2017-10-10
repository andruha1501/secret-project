import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from "rxjs/Observable";
import { Party } from '../classes/party';
import 'rxjs/add/operator/map';

interface ItemsResponse {
  data: any;
}

@Injectable()
export class MapService {
  markers: google.maps.Marker[] = [];
  map: google.maps.Map;

  parties: Party[] = [];

  constructor(private http: HttpClient) {

  }

  getData() {
    return this.http.get<ItemsResponse>('api/getParty');
  }

  postData(party: any) {
    let data = JSON.stringify(party);
    return this.http.post('api/postParty', data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')})
        .subscribe();
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
