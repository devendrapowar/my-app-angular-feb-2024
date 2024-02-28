import { Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { NewStudentComponent } from './new-student/new-student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthComponent } from './auth/auth.component';
import { PagesComponent } from './pages/pages.component';

export const routes: Routes = [
    {
        path: 'auth',
        component: AuthComponent,
        children: [
            {
                path: '',
                component: LoginComponent
            },  {
                path: '**',
                redirectTo: ''
            }
        
        ]
    },
    {
        path: 'pages',
        component: PagesComponent,
        children: [{
                path: 'student-list',
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
                redirectTo: 'student-list'
            }
        ]
    },  { path: '**',
        redirectTo: 'auth'
    }
    // {
    //     path: '',
    //     component: LoginComponent,
    //     title: 'Login'
    // },{
    //     path: 'student-list',
    //     component: StudentComponent,
    //     title: 'Student List'
    // },{
    //     path: 'new-student',
    //     component: NewStudentComponent,
    //     title: 'New Student'
    // },{
    //     path: 'view-student/:id',
    //     component: StudentDetailsComponent,
    //     title: 'Student Detail'
    // },{
    //     path: 'update-student/:id',
    //     component: NewStudentComponent,
    //     title: 'Student Detail'
    // },{
    //     path: '**',
    //     redirectTo: ''
    // }
];
