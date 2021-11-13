import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ProfileDataService } from './services/profile-data-service/profile-data-service.service';
import { DateConversionService } from './services/date-conversion.service';
import { MatSidenav } from '@angular/material/sidenav';
import { DrawerService } from './services/drawer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  constructor(private dataService: ProfileDataService, private drawerService: DrawerService){
  }
  skillId = -1;
  title = 'Resume';
  @ViewChild('drawer') drawer!: MatSidenav;

  p = this.dataService.deserializeProfile();
}
