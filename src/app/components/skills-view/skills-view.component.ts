import { DataSource } from '@angular/cdk/collections';
import { Component, Input, OnInit } from '@angular/core';
import { Education } from 'src/app/models/education.model';
import { Profile } from 'src/app/models/profile.model';
import { Skill } from 'src/app/models/skill.model';
import { SkillSortingService } from 'src/app/services/skill-sorting.service';
import { FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'skills-view',
  templateUrl: './skills-view.component.html',
  styleUrls: ['./skills-view.component.css']
})
export class SkillsViewComponent implements OnInit{
  @Input() p!: Profile;
  displayedColumns = ['skillName', 'skillRating'];
  sortedDataSource: Skill[] = [];
  gitHubUrl: string = "";
  linkedInUrl: string = "";
  instagramUrl: string = "";
  select: FormGroup;
  selectedControl = new FormControl('None');
  skillDataSource: Skill[] = [];
  constructor(private fb: FormBuilder, private sortingService: SkillSortingService) {
    this.select = fb.group({
      selected: this.selectedControl
    });
  }

  ngOnInit(): void {
    this.skillDataSource = this.sortingService.sortSkillsBySKillRating(this.p.getAllSkills());
    this.gitHubUrl = this.p.getGitHubUrl();
    this.linkedInUrl = this.p.getLinkedInUrl();
    this.instagramUrl = this.p.getInstagramUrl();
  }

  getSortedSkills(category: string): Skill[]{
    return this.sortingService.sortSkillsByCategory(this.skillDataSource,category);
  }
}
