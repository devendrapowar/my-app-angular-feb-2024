import { Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { NewStudentComponent } from './new-student/new-student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';

export const routes: Routes = [
    {
        path: '',
        component: StudentComponent,
        title: 'Student List'
    },{
        path: 'new-student',
        component: NewStudentComponent,
        title: 'New Student'
    },{
        path: 'view-student/:id',
        component: StudentDetailsComponent,
        title: 'Student Detail'
    },{
        path: 'update-student/:id',
        component: NewStudentComponent,
        title: 'Student Detail'
    },{
        path: '**',
        redirectTo: ''
    }
];
