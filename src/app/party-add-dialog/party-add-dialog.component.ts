import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { MapComponent } from '../map/map.component';
import { MapService } from '../services/map.service';
import { Party } from '../classes/party';

const types = [
  {value: 'mens', viewValue: 'Только парни'},
  {value: 'girls', viewValue: 'Только девушки'},
  {value: 'both', viewValue: 'Без разницы'}
];
@Component({
  selector: 'app-party-add-dialog',
  templateUrl: './party-add-dialog.component.html',
  styleUrls: ['./party-add-dialog.component.scss']
})
export class PartyAddDialogComponent implements OnInit {
  @ViewChild('location') latt: ElementRef;
  lat: number;
  lng: number;
  title: string;
  adress: string;
  people: string;
  date: string;
  description: string;
  private_adress: boolean;
  ads: boolean;
  party: Party;

  types = types;

  constructor(
    public dialogRef: MdDialogRef<PartyAddDialogComponent>,
    @Inject(MD_DIALOG_DATA) public data: any,
    private mapService: MapService) { }

  ngOnInit() {
    let autocomplete = new google.maps.places.Autocomplete(this.latt.nativeElement, {
      types: ['geocode']
    });
    autocomplete.addListener('place_changed', () => {
      this.lat=autocomplete.getPlace().geometry.location.lat();
      this.lng=autocomplete.getPlace().geometry.location.lng();
      //console.log(this.lat);
      //console.log(this.lng);
    });
    //setInterval(() => this.mapService.addMarker(48.272774, 25.928441, true), 100);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addParty() {
    this.party = new Party(this.title, this.adress, this.lat, this.lng, this.people, this.date,
      this.description, this.private_adress, this.ads);

    this.mapService.postData(this.party);
    this.mapService.addMarker(this.lat, this.lng, this.private_adress);
    this.dialogRef.close();
  }

}
