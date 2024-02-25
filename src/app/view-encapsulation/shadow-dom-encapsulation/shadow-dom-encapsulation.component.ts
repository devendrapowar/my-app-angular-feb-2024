import { Component, ViewEncapsulation } from '@angular/core';
import { EmulatedEncapsulationComponent } from '../emulated-encapsulation/emulated-encapsulation.component';
import { NoEncapsulationComponent } from '../no-encapsulation/no-encapsulation.component';

@Component({
  standalone: true,
  selector: 'app-shadow-dom-encapsulation',
  templateUrl: './shadow-dom-encapsulation.component.html',
  styleUrls: ['./shadow-dom-encapsulation.component.scss'],
  imports: [EmulatedEncapsulationComponent, NoEncapsulationComponent],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ShadowDomEncapsulationComponent {}
