import { WritePropExpr } from '@angular/compiler';
import { Injectable, OnInit } from '@angular/core';
import { CollegeClass } from 'src/app/models/college-class.model';
import { CollegeTerm } from 'src/app/models/college-term.model';
import { EducationSummary } from 'src/app/models/education-summary.model';
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
            skillArray.push(new Skill(idGenerator, this.data.Profile._skills[i]._skillName, this.data.Profile._skills[i]._skillLogo, this.data.Profile._skills[i]._skillDescription,this.data.Profile._skills[i]._skillRating,this.data.Profile._skills[i]._industryExperience,this.data.Profile._skills[i]._tags, this.data.Profile._skills[i]._featuredProject));
            idGenerator++;
        }
        
        return skillArray;
    }

    deserializeEducation(): Education{
        var summary: EducationSummary[] = [];
        var collegeTerm: CollegeTerm[] = [];
        var collegeClasses: CollegeClass[] = [];
        for (let i = 0; i < this.data.Profile._education._summary.length; i++) 
        {
            summary.push(new EducationSummary(
                this.data.Profile._education._summary[i]._schoolName,
                this.data.Profile._education._summary[i]._degreeType,
                this.data.Profile._education._summary[i]._degreeName,
                new Date(this.data.Profile._education._summary[i]._startDate),
                new Date(this.data.Profile._education._summary[i]._graduationDate),
                this.data.Profile._education._summary[i]._gpa));
        }

        for (let i = 0; i < this.data.Profile._education._history.length; i++)
        {
            collegeClasses = [];
            for (let j = 0; j < this.data.Profile._education._history[i].classes.length; j++) 
            {
                collegeClasses.push(new CollegeClass(
                    this.data.Profile._education._history[i].classes[j].code,
                    this.data.Profile._education._history[i].classes[j].name,
                    this.data.Profile._education._history[i].classes[j].description,
                    this.data.Profile._education._history[i].classes[j].grade,
                    this.data.Profile._education._history[i].classes[j].takenAt,
                    this.data.Profile._education._history[i].classes[j].image,
                    this.data.Profile._education._history[i].classes[j].professorName,
                    this.data.Profile._education._history[i].classes[j].rateMyProfessorLink,
                    this.data.Profile._education._history[i].classes[j].personalNote,
                    this.data.Profile._education._history[i].classes[j].githubLink,
                    this.data.Profile._education._history[i].classes[j].subject,
                    this.data.Profile._education._history[i].classes[j].rating
                ))
            }

            collegeTerm.push(new CollegeTerm(
                collegeClasses,
                this.data.Profile._education._history[i].ID,
                this.data.Profile._education._history[i].name,
                this.data.Profile._education._history[i].year,
                this.data.Profile._education._history[i].GPA,
                this.data.Profile._education._history[i].standing
            ))
        }
        return new Education(summary,collegeTerm);
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
            this.data.Profile.profileName,
            this.data.Profile._email,
            this.data.Profile._phoneNumber,
            this.deserializeEducation(),
            this.deserializeWorkExperience(),
            this.data.Profile._skillCategories,
            this.data.Profile._education._classCategories,
            this.deserializeSkills(),
            this.data.Profile._gitHubUrl,
            this.data.Profile._instagramUrl,
            this.data.Profile._linkedInUrl
        )
    }
}

