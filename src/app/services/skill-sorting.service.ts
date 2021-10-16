import { Injectable } from '@angular/core';
import { Skill } from '../models/skill.model';

@Injectable({
  providedIn: 'root'
})
export class SkillSortingService {

  sortSkills(skills: Skill[]): Skill[]{
    return skills.sort((a,b) => b.getSkillRating() - a.getSkillRating());
  }
}
