import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShipStationApi } from './api/ship-station.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [ShipStationApi],
  declarations: []
})
export class CoreModule { }
