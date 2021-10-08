import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/models/profile.model';
import { Skill } from 'src/app/models/skill.model';
import { WorkExperience } from './models/work-experience.model';
import  *  as  d  from  'src/assets/Profile.json';

export interface Experience {
  language: string;
  yearsOfExperience: number;
}

const ELEMENT_DATA: Experience[] = [
  {language: "C/C++", yearsOfExperience: 4},
  {language: "C#", yearsOfExperience: 3},
  {language: "Python", yearsOfExperience: 3},
  {language: "Java", yearsOfExperience: 1},
  {language: "Javascript", yearsOfExperience: 1},
  {language: "Typescript", yearsOfExperience: 1},
  {language: "R", yearsOfExperience: 1}
];

let data = new Profile
(
  "Nicholas Farkas",
  "nicholaswfarkas.dev@gmail.com",
  "313-969-3310",
  [
    new WorkExperience
    (
      "Software Engineer Intern",
      "Rocket Mortgage",
      new Date("May, 2019"),
      new Date("August, 2019"),
      "Detroit",
      [
        "Engineering",
        "Software Engineering",
        "C#",
        ".Net Core"
      ]
    ),
    new WorkExperience
    (
      "Software Engineer Intern",
      "Rocket Mortgage",
      new Date("June, 2020"),
      new Date("August, 2020"),
      "Detroit",
      [
        "Engineering",
        "Software Engineering",
        "Salesforce",
        "SQL"
      ]
    )
  ],
  [
    new Skill
    (
      "C#",
      "Use C# for .Net Core Backend Developement",
      2,
      2,
      [
        ".Net Core"
      ]
    ),
    new Skill
    (
      "Java",
      "Use Java for Application Developement",
      2,
      2,
      [
        "School"
      ]
    ),
    new Skill
    (
      "C++",
      "Use C++ for Application Developement",
      2,
      2,
      [
        "School"
      ]
    )
  ],
  "nickwfarkas.github.io",
  "nickfarkas9",
  "nickfarkas"
);


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'personal-portfolio';
  displayedColumns: string[] = ['language', 'years-of-experience'];
  dataSource = ELEMENT_DATA;
  p = data;
}
