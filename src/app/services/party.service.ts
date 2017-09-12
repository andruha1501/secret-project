import { Party } from '../classes/party';
import { Injectable } from '@angular/core';

@Injectable()
export class PartyService {

  parties: Party[] = [];

  addData(title: string, lan1: number, lan2: number) {
    this.parties.push(new Party(title, lan1, lan2));
  }

  getData(): Party[] {
    return this.parties;
  }

}
