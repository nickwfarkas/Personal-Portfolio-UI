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
  skillLogo = "";
  featuredProject = "";
  skillDescription = "";
  skillRating = 0;
  skillIndustryExperience = 0;
  currentId = -1;
  isDisabled = false;

  constructor() { }

  ngOnInit(): void {
  }

  goToProject(url: string): void {
    window.open(url,'_blank');
  }

  selectedSkillChangedHandler(id: number): void{
    this.getSkillById(id);
    if(this.currentId == id){
      this.currentId = -1;
      this.drawer.close();
    }
    else{
      window.scrollTo(0, 120);
      this.drawer.open()
      this.currentId = id;
    }
  }

  getRate(): number{
    return this.skillRating;
  }

  getGuageSize(): number{
    if(window.innerWidth < 800){
      return 100;
    }
    else{
      return 200;
    }
  }

  getRatingTitle(rating: number): string{
    switch (rating) {
      case 1:
        return "Learning"
        break;
      case 2:
        return "Learning"
        break;
      case 3:
        return "Learning"
        break;
      case 4:
        return "Working Knowlege"
        break;
      case 5:
        return "Working Knowlege"
        break;
      case 6:
        return "Intermediate"
        break;
      case 7:
        return "Intermediate"
        break;
      case 8:
        return "Proficient"
        break;
      case 9:
        return "Proficient"
        break;
      default:
        return ""
        break;
    }
  }

  getSkillById(id: number):void{
    let skills = this.p.getAllSkills();
    for (let i = 0; i < skills.length; i++){
      if (skills[i].getSkillId() == id) {
        this.skillName = skills[i].getSkillName();
        this.skillLogo = skills[i].getSkillLogo();
        this.skillDescription = skills[i].getSkillDescription();
        this.skillRating = skills[i].getSkillRating();
        this.skillIndustryExperience = skills[i].getIndustryExperience();
        this.featuredProject = skills[i].getfeaturedProject();
        break;
      }
    }
    if(this.featuredProject == ""){
      this.isDisabled = true;
    }
    else{
      this.isDisabled = false;
    }
  }
}
