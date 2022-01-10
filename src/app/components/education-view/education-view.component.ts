import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatAccordion } from '@angular/material/expansion';
import { CollegeClass } from 'src/app/models/college-class.model';
import { Education } from 'src/app/models/education.model';
import { Profile } from 'src/app/models/profile.model';
import { ClassDialogComponent } from '../class-dialog/class-dialog.component';

@Component({
  selector: 'education-view',
  templateUrl: './education-view.component.html',
  styleUrls: ['./education-view.component.css']
})
export class EducationViewComponent implements OnInit {
  constructor(public dialog: MatDialog){

  }
  @ViewChild(MatAccordion) accordion!: MatAccordion;
  @Input() p!: Profile;
  gpa = "";
  ngOnInit(): void {
  }

  backgroundColor(color: string): string{
    switch (color) {
      case "English":
        return "bg-purple-600";
        break;
      case "Social Science":
        return "bg-red-600";
        break;
      case "Computer Science":
        return "bg-yellow-500";
        break;
      case "Physical Science":
        return "bg-green-600";
        break;
      case "Math":
        return "bg-blue-600";
        break;
      default:
        return "bg-grey-200"
        break;
    }
  }

  openClassDialog(collegeClass: CollegeClass){
    const dialogRef = this.dialog.open(ClassDialogComponent, {
      data: collegeClass,
    });
  }
}
