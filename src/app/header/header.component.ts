import { Component, Inject } from '@angular/core';
import { MdDialog } from '@angular/material';
import { PartyAddDialogComponent } from '../party-add-dialog/party-add-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(public dialog: MdDialog) {}

  openDialog(): void {
    let dialogRef = this.dialog.open(PartyAddDialogComponent, {
      width: '250px',
      data: 'sd'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
