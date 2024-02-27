import { CurrencyPipe, LowerCasePipe, NgFor, UpperCasePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../services/student.service';
import { Student } from './model';
import { ActivatedRoute, Router } from '@angular/router';
import { ReversStringPipe } from '../pipes/revers-string.pipe';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [NgFor, FormsModule, CurrencyPipe, UpperCasePipe, LowerCasePipe, ReversStringPipe],
  templateUrl: './student.component.html',
  styleUrl: './student.component.scss',
})
export class StudentComponent implements OnInit{
  public studentList!: Student[];
  public search: string = 'dev';

  constructor(private studentService: StudentService, private router: Router) {  
  }
  
  ngOnInit(): void {
     this.studentService.getStudents().subscribe((res)=>{
      console.log(res);
      this.studentList = res;
     });
  }


  deleteStd(id: string) {
    this.studentService.deleteStudent(id).subscribe((res)=>{
      this.studentList = res;
    })
  }

  goTo() {
    console.log(this.search);
    this.router.navigate(['new-student']);
  }

  goToDetail(id: string) {
    this.router.navigate(['view-student', id]);
  }

  goToUpdate(id: string) {
    this.router.navigate(['update-student', id]);
  }

}
