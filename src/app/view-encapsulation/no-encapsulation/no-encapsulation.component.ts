import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-no-encapsulation',
  templateUrl: './no-encapsulation.component.html',
  styleUrls: ['./no-encapsulation.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NoEncapsulationComponent {

}
