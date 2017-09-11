import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddHouseComponent } from './add-house/add-house.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdToolbarModule, MdIconModule, MdSidenavModule, MdButtonModule, MdCardModule, MdSliderModule} from '@angular/material';
import { ViewListComponent } from './view-list/view-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddHouseComponent,
    HeaderComponent,
    SidebarComponent,
    ViewListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdToolbarModule, 
    MdIconModule,
    MdSidenavModule,
    MdButtonModule,
    MdCardModule,
    MdSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
