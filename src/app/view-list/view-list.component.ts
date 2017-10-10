import { Component, OnInit } from '@angular/core';
import { MapService } from '../services/map.service';

@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.scss']
})
export class ViewListComponent implements OnInit {
  partyList: any[] = [];

  constructor(private mapService: MapService ) { }

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    this.mapService
        .getData()
        .subscribe(res => {
          for(var m of res.data)
            this.partyList.push(m.title);
        });
  }

}
