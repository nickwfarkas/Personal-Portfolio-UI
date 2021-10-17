import { DataSource } from '@angular/cdk/collections';
import { Component, Input, OnInit } from '@angular/core';
import { Education } from 'src/app/models/education.model';
import { Profile } from 'src/app/models/profile.model';
import { Skill } from 'src/app/models/skill.model';
import { SkillSortingService } from 'src/app/services/skill-sorting.service';

@Component({
  selector: 'skills-view',
  templateUrl: './skills-view.component.html',
  styleUrls: ['./skills-view.component.css']
})
export class SkillsViewComponent implements OnInit{
  constructor(private sortingService: SkillSortingService) {
    
  }
  @Input() p!: Profile;
  displayedColumns = ['skillName', 'skillRating'];
  skillDataSource: Skill[] = [];
  gitHubUrl: string = "";
  linkedInUrl: string = "";
  instagramUrl: string = "";
  selected = 'None';
  
  ngOnInit(): void {
    // this.skillDataSource = this.p.getAllSkills();
    this.skillDataSource = this.sortingService.sortSkills(this.p.getAllSkills());
    this.gitHubUrl = this.p.getGitHubUrl();
    this.linkedInUrl = this.p.getLinkedInUrl();
    this.instagramUrl = this.p.getInstagramUrl();
  }
}
