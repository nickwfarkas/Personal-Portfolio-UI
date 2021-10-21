import { Injectable } from '@angular/core';
import { Skill } from '../models/skill.model';

@Injectable({
  providedIn: 'root'
})
export class SkillSortingService {

  sortSkillsBySKillRating(skills: Skill[]): Skill[]{
    return skills.sort((a,b) => b.getSkillRating() - a.getSkillRating());
  }

  sortSkillsByCategory(skills: Skill[], categoryName: string): Skill[]{
    let newSkillList: Skill[] = [];

    if(categoryName == "None")
    {
      return skills;
    }

    for(let skill of skills)
    {
      if(skill.getTags().includes(categoryName))
      {
        newSkillList.push(skill);
      }
    }
    return newSkillList;
  }
}
