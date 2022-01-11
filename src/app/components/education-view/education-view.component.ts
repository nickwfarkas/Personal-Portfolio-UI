import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatAccordion } from '@angular/material/expansion';
import { CollegeClass } from 'src/app/models/college-class.model';
import { CollegeTerm } from 'src/app/models/college-term.model';
import { Education } from 'src/app/models/education.model';
import { Profile } from 'src/app/models/profile.model';
import { EducationSortingServiceService } from 'src/app/services/education-sorting-service.service';
import { ClassDialogComponent } from '../class-dialog/class-dialog.component';

@Component({
  selector: 'education-view',
  templateUrl: './education-view.component.html',
  styleUrls: ['./education-view.component.css']
})
export class EducationViewComponent implements OnInit {
  constructor(public dialog: MatDialog, private fb: FormBuilder, private sortingService: EducationSortingServiceService){
    this.select = fb.group({
      selected: this.selectedControl
    });
  }
  @ViewChild(MatAccordion) accordion!: MatAccordion;
  @Input() p!: Profile;
  select: FormGroup;
  selectedControl = new FormControl('None');
  s = "None";
  gpa = "";
  educationDataSource: CollegeTerm[] = [];
  ngOnInit(): void {
    this.educationDataSource = this.p.getEducation().getCollegeTerm();
  }

  backgroundColor(color: string): string{
    switch (color) {
      case "English":
        return "bg-purple-600";
      case "Social Science":
        return "bg-red-600";
      case "Computer Science":
        return "bg-yellow-500";
      case "Physical Science":
        return "bg-green-600";
      case "Math":
        return "bg-blue-600";
      default:
        return "bg-grey-200"
    }
  }

  openClassDialog(collegeClass: CollegeClass){
    const dialogRef = this.dialog.open(ClassDialogComponent, {
      data: collegeClass,
    });
  }

  getSortedEducation(): void{
    this.educationDataSource = this.sortingService.sortEducationByCategory(this.p.getEducation().getCollegeTerm(),this.selectedControl.value);
  }
}
