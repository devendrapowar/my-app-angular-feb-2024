import { Injectable } from '@angular/core';
import { Student } from '../student/model';

const STUDENT: Student[] = [
  {
    img: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    id: 's1',
    name: 's123',
    age: 32,
    email: 'test@test.com',
    number: '12457654',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    id: 's2',
    name: 's234',
    age: 12,
    email: 'test@test.com',
    number: '12457654',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    id: 's3',
    name: 's345',
    age: 23,
    email: 'test@test.com',
    number: '12457654',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    id: 's4',
    name: 's456',
    age: 38,
    email: 'test@test.com',
    number: '12457654',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    id: 's5',
    name: 's45654',
    age: 18,
    email: 'test@test.com',
    number: '12457654',
  },
];
@Injectable({
  providedIn: 'root',
})
export class StudentService {
  public studentList: Student[];

  constructor() {
    this.studentList = STUDENT;
  }

  get students(): Student[] {
    return this.studentList;
  }

  set students(value: Student[]) {
    this.studentList = value;
  }

  getStudentDetails(id: string): Student | undefined {
    return this.studentList.find((std) => std.id === id);
  }

  saveStudentDetails(student: Student) {
    this.studentList.unshift(student);
  }

  updateStudent(id: string, updatedStd: Student) {
    const index = this.studentList.findIndex((std) => std.id === id);
    if(index > -1) {
      this.studentList[index] = updatedStd;
    }
  }
}
