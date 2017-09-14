import { Party } from '../classes/party';
import { Injectable } from '@angular/core';

@Injectable()
export class PartyService {

  parties: Party[] = [];

  addData(lan1: number, lan2: number) {
  //  this.parties.push(new Party(title, lan1, lan2));
    console.log(lan1, lan2);
  }

}
