import { Component, Input } from '@angular/core';
import { StudentService } from '../services/student.service';
import { Student } from '../student/model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.scss'
})
export class StudentDetailsComponent {
  public student!: Student | undefined;
  @Input()
  set id(value: string) {
    console.log('details', value);
    this.initStudentDetails(value)
  }

  constructor(private studentService: StudentService, private router: Router) {}

  initStudentDetails(id: string) {
    this.student = this.studentService.getStudentDetails(id);
    console.log('data', this.student)
  }

  backTo() {
    this.router.navigate([''])
  }

}
