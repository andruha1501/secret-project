import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { PartyService }   from './services/party.service';

import { AppComponent } from './app.component';
import { AddHouseComponent } from './add-house/add-house.component';

@NgModule({
  declarations: [
    AppComponent,
    AddHouseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [PartyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
