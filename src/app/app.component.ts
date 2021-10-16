import { Component, OnInit } from '@angular/core';
import { ProfileDataService } from './services/profile-data-service/profile-data-service.service';
import { DateConversionService } from './services/date-conversion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  constructor(private dataService: ProfileDataService, private dateService: DateConversionService){
  }
  title = 'personal-portfolio';
  displayedColumns: string[] = ['language', 'years-of-experience'];
  p = this.dataService.deserializeProfile();
}
