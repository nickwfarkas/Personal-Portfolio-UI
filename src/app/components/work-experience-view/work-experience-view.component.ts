import { Component, Input, OnInit } from '@angular/core';
import { Profile } from 'src/app/models/profile.model';
import { WorkExperience } from 'src/app/models/work-experience.model';

@Component({
  selector: 'work-experience-view',
  templateUrl: './work-experience-view.component.html',
  styleUrls: ['./work-experience-view.component.css']
})
export class WorkExperienceViewComponent implements OnInit {

  constructor() { }

  @Input() p!: Profile;
  displayedColumns = ['skillName', 'skillRating'];
  dataSource: WorkExperience[] = [];
  ngOnInit(): void {
    this.dataSource = this.p.getAllWorkExperience();
  }
}
