import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Profile } from 'src/app/models/profile.model';
import { Skill } from 'src/app/models/skill.model';

@Component({
  selector: 'app-skills-drawer',
  templateUrl: './skills-drawer.component.html',
  styleUrls: ['./skills-drawer.component.css']
})
export class SkillsDrawerComponent implements OnInit {
  @Input() p!: Profile;
  @Input() skillId!: number;
  @ViewChild('drawer') drawer!: MatSidenav;
  skillName = "";
  skillDescription = "";
  skillRating = 0;
  skillIndustryExperience = 0;
  currentId = -1;

  constructor() { }

  ngOnInit(): void {
  }

  selectedSkillChangedHandler(id: number): void {
    this.getSkillById(id);
    if(this.currentId == id){
      this.currentId = -1;
      this.drawer.close();
    }
    else{
      this.drawer.open()
      this.currentId = id;
    }
  }

  getRate(){
    return this.skillRating;
  }

  getGuageSize(){
    if(window.innerWidth < 800){
      return 100;
    }
    else{
      return 200;
    }
  }

  getSkillById(id: number):void{
    let skills = this.p.getAllSkills();
    for (let i = 0; i < skills.length; i++){
      if (skills[i].getSkillId() == id) {
        this.skillName = skills[i].getSkillName();
        this.skillDescription = skills[i].getSkillDescription();
        this.skillRating = skills[i].getSkillRating();
        this.skillIndustryExperience = skills[i].getIndustryExperience();
        break;
      }
    }
  }
}
