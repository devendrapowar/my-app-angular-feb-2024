import { Component, OnInit, ViewChild } from '@angular/core';
import { Route, Router, RouterOutlet } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { StudentComponent } from './student/student.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ShadowDomEncapsulationComponent } from './view-encapsulation/shadow-dom-encapsulation/shadow-dom-encapsulation.component';
import { NoEncapsulationComponent } from './view-encapsulation/no-encapsulation/no-encapsulation.component';
import { EmulatedEncapsulationComponent } from './view-encapsulation/emulated-encapsulation/emulated-encapsulation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    ParentComponent,
    StudentComponent,
    EmulatedEncapsulationComponent,
    NoEncapsulationComponent,
    ShadowDomEncapsulationComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit{
  @ViewChild('appHeader') appHeader!: HeaderComponent;
  @ViewChild('appFooter') appFooter!: FooterComponent;
  title = 'My App';
  constructor(private router: Router) {}

ngOnInit(): void {
  const token = localStorage.getItem('token');
  if(token) {
    this.router.navigate(['student-list'])
  } 
}

  parentClick() {
    console.log('parent click');
    this.appHeader.childClick();
    this.appFooter.childClick()
  }
}
