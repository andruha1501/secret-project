import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { MapComponent } from '../map/map.component';
import { MapService } from '../services/map.service';

@Component({
  selector: 'app-party-add-dialog',
  templateUrl: './party-add-dialog.component.html',
  styleUrls: ['./party-add-dialog.component.scss']
})
export class PartyAddDialogComponent implements OnInit {
  @ViewChild('location') latt: ElementRef;
  lat: number;
  lng: number;

  types = [
      {value: 'mens', viewValue: 'Только парни'},
      {value: 'girls', viewValue: 'Только девушки'},
      {value: 'both', viewValue: 'Без разницы'}
    ];

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
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addParty(title: string, adress: string, people: string, data: string,
    description: string, private_adress: boolean, adv: boolean) {
    this.mapService.addMarker(this.lat, this.lng);
    this.dialogRef.close();
  }

}
