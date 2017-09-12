import { Component, OnInit } from '@angular/core';
import { PartyService } from '../services/party.service';

@Component({
  selector: 'add-house',
  templateUrl: './add-house.component.html',
  styleUrls: ['./add-house.component.css']
})
export class AddHouseComponent {

  constructor(private partyService: PartyService) { }

  addParty(title: string, lan1: number, lan2: number) {
    this.partyService.addData(title, lan1, lan2);
  }

}
