import { Component, ViewEncapsulation } from '@angular/core';
import { NoEncapsulationComponent } from '../no-encapsulation/no-encapsulation.component';

@Component({
  standalone: true,
  selector: 'app-emulated-encapsulation',
  templateUrl: './emulated-encapsulation.component.html',
  styleUrls: ['./emulated-encapsulation.component.scss'],
  imports: [NoEncapsulationComponent],
  encapsulation: ViewEncapsulation.Emulated
})
export class EmulatedEncapsulationComponent {

}
