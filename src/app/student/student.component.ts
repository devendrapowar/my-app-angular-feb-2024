import { NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../services/student.service';
import { Student } from './model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.scss',
})
export class StudentComponent implements OnInit{
  public studentList!: Student[];

  constructor(private studentService: StudentService, private router: Router) {  
  }
  
  ngOnInit(): void {
    this.studentList = this.studentService.students;
  }


  deleteStd(index: number) {
    this.studentList.splice(index, 1);
  }

  goTo() {
    this.router.navigate(['new-student']);
  }

  goToDetail(id: string) {
    this.router.navigate(['view-student', id]);
  }

  goToUpdate(id: string) {
    this.router.navigate(['update-student', id]);
  }

}
