import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdToolbarModule, MdIconModule, MdSidenavModule, MdButtonModule, MdCardModule, MdDialogModule, MdSliderModule, MdInputModule } from '@angular/material';
import { ViewListComponent } from './view-list/view-list.component';
import { appRoutes } from './app.router';
import { RouterModule } from '@angular/router';
import { MapComponent } from './map/map.component';
import {HttpClientModule} from '@angular/common/http';
import { MapService } from './services/map.service'
import { PartyAddDialogComponent } from './party-add-dialog/party-add-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ViewListComponent,
    MapComponent,
    PartyAddDialogComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( appRoutes),
    BrowserAnimationsModule,
    MdToolbarModule,
    MdIconModule,
    MdSidenavModule,
    MdButtonModule,
    MdCardModule,
    MdSliderModule,
    MdInputModule,
    MdDialogModule,
    HttpClientModule
  ],
  entryComponents: [PartyAddDialogComponent],
  providers: [MapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
