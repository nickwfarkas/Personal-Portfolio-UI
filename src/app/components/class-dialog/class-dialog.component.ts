import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CollegeClass } from 'src/app/models/college-class.model';

@Component({
  selector: 'app-class-dialog',
  templateUrl: './class-dialog.component.html',
  styleUrls: ['./class-dialog.component.css']
})
export class ClassDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ClassDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CollegeClass) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
