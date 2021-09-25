import { Component } from '@angular/core';

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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'personal-portfolio';
  displayedColumns: string[] = ['language', 'years-of-experience'];
  dataSource = ELEMENT_DATA;
}
