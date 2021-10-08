import { DataSource } from '@angular/cdk/collections';
import { Component, Input, OnInit } from '@angular/core';
import { Profile } from 'src/app/models/profile.model';
import { Skill } from 'src/app/models/skill.model';

@Component({
  selector: 'skills-view',
  templateUrl: './skills-view.component.html',
  styleUrls: ['./skills-view.component.css']
})
export class SkillsViewComponent implements OnInit{
  @Input() p!: Profile;
  displayedColumns = ['skillName', 'skillRating'];
  dataSource: Skill[] = [];
  ngOnInit(): void {
    this.dataSource = this.p.getAllSkills();
  }
}
