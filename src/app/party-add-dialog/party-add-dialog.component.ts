import { Component, OnInit, Inject } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { MapComponent } from '../map/map.component';
import { PartyService } from '../services/party.service';

@Component({
  selector: 'app-party-add-dialog',
  templateUrl: './party-add-dialog.component.html',
  styleUrls: ['./party-add-dialog.component.scss']
})
export class PartyAddDialogComponent implements OnInit {

  ngOnInit() {
  }

  constructor(
    public dialogRef: MdDialogRef<PartyAddDialogComponent>,
    @Inject(MD_DIALOG_DATA) public data: any,
    public partyService: PartyService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addParty(lan1: number, lan2: number){
    this.partyService.addData(lan1, lan2);
  }

}
