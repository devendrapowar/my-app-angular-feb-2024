import { CurrencyPipe, LowerCasePipe, NgFor, UpperCasePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../services/student.service';
import { Student } from './model';
import { ActivatedRoute, Router } from '@angular/router';
import { ReversStringPipe } from '../pipes/revers-string.pipe';
import { ConvertAgePipe } from '../pipes/convert-age.pipe';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [NgFor, FormsModule, CurrencyPipe, UpperCasePipe, LowerCasePipe, ReversStringPipe, ConvertAgePipe],
  templateUrl: './student.component.html',
  styleUrl: './student.component.scss',
})
export class StudentComponent implements OnInit{
  public studentList!: Student[];
  public filteredList!: Student[]
  public search: string = '';

  constructor(private studentService: StudentService, private router: Router) {  
  }
  
  ngOnInit(): void {
     this.studentService.getStudents().subscribe((res)=>{
      console.log(res);
      this.studentList = res;
      this.searchByName()
     });
  }

  searchByName() {
    console.log(this.search)
    this.filteredList = this.studentList.filter((std)=>{
        return std.name?.toLowerCase().includes(this.search?.toLowerCase())
    })
    console.log(this.filteredList);
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
