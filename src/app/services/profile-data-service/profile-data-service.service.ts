import { WritePropExpr } from '@angular/compiler';
import { Injectable, OnInit } from '@angular/core';
import { Education } from 'src/app/models/education.model';
import { Profile } from 'src/app/models/profile.model';
import { Skill } from 'src/app/models/skill.model';
import { WorkExperience } from 'src/app/models/work-experience.model';
import  *  as  profile  from  'src/assets/Profile.json';

@Injectable({
    providedIn: 'root',
  })

export class ProfileDataService{
    data = profile;

    deserializeSkills(): Skill[]{
        var idGenerator: number = 0;
        var skillArray: Skill[] = []
        for (let i = 0; i < this.data.Profile._skills.length; i++) 
        {
            skillArray.push(new Skill(idGenerator, this.data.Profile._skills[i]._skillName,this.data.Profile._skills[i]._skillDescription,this.data.Profile._skills[i]._skillRating,this.data.Profile._skills[i]._industryExperience,this.data.Profile._skills[i]._tags));
            idGenerator++;
        }
        
        return skillArray;
    }

    deserializeEducation(): Education[]{
        var educationArray: Education[] = [];
        for (let i = 0; i < this.data.Profile._education.length; i++) 
        {
            educationArray.push(
                new Education(
                    this.data.Profile._education[i]._schoolName,
                    this.data.Profile._education[i]._degreeType,
                    this.data.Profile._education[i]._degreeName,
                    new Date(this.data.Profile._education[i]._startDate),
                    new Date(this.data.Profile._education[i]._graduationDate),
                    this.data.Profile._education[i]._gpa
                ));
        }
        return educationArray;
    }

    deserializeWorkExperience(): WorkExperience[]{
        var workExperienceArray: WorkExperience[] =[];
        for (let i = 0; i < this.data.Profile._workExperience.length; i++) 
        {
            workExperienceArray.push(
                new WorkExperience(
                    this.data.Profile._workExperience[i]._positionName,
                    this.data.Profile._workExperience[i]._companyName,
                    new Date(this.data.Profile._workExperience[i]._startDate),
                    new Date(this.data.Profile._workExperience[i]._endDate),
                    this.data.Profile._workExperience[i]._city,
                    this.data.Profile._workExperience[i]._attributes
                ));
        }
        return workExperienceArray;
    }

    deserializeProfile(): Profile{
        return new Profile(
            this.data.Profile._name,
            this.data.Profile._email,
            this.data.Profile._phoneNumber,
            this.deserializeEducation(),
            this.deserializeWorkExperience(),
            this.data.Profile._skillCategories,
            this.deserializeSkills(),
            this.data.Profile._gitHubUrl,
            this.data.Profile._instagramUrl,
            this.data.Profile._linkedInUrl
        )
    }
}

