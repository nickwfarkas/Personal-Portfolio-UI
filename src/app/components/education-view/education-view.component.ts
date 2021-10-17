import { Component, Input, OnInit } from '@angular/core';
import { Education } from 'src/app/models/education.model';
import { Profile } from 'src/app/models/profile.model';

@Component({
  selector: 'education-view',
  templateUrl: './education-view.component.html',
  styleUrls: ['./education-view.component.css']
})
export class EducationViewComponent implements OnInit {
  @Input() p!: Profile;
  educationDataSource: Education[] = [];
  gpa = "";
  ngOnInit(): void {
    this.educationDataSource = this.p.getEducation();
  }
}
