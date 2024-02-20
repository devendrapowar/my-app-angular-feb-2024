import { Component, Input, OnInit } from '@angular/core';
import { Student } from '../student/model';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../services/student.service';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-new-student',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, NgIf],
  templateUrl: './new-student.component.html',
  styleUrl: './new-student.component.scss',
})
export class NewStudentComponent implements OnInit {
  public studentForm!: FormGroup;
  public stdDetails!: Student | undefined;
  @Input()
  set id(value: string) {
    console.log('update', value);
    this.getDetails(value);
  }

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
    const id = Math.floor(Math.random() * 100 + 1).toString();
    this.studentForm = this.fb.group({
      id: [id],
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(16),
          Validators.pattern('^([^0-9]*)$'),
        ],
      ],
      age: ['', [Validators.required, Validators.min(18)]],
      email: ['', [Validators.required, Validators.email]],
      number: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],
      img: ['', [Validators.required]],
    });
    // required, maxlength, minlength, min, max, pattern, type/email4
    console.log('detail', this.stdDetails);
    if (this.stdDetails) {
      this.studentForm.setValue(this.stdDetails);

      // pathValue
      // this.studentForm.patchValue({
      //   img: 'dev'
      // })
    }
    console.log('studentForm', this.studentForm);
  }

  getDetails(id: string) {
    this.stdDetails = this.studentService.getStudentDetails(id);
  }
  addStudent() {
    const value = this.studentForm.value;
    if (!this.stdDetails) {
      this.studentService.saveStudentDetails(value);
    } else {
      this.studentService.updateStudent(value.id, value);
    }
    this.router.navigate(['']);
  }
}
