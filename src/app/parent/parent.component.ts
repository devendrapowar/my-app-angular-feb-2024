import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {
  public value: string = 'parent value';
  public childValue!: number

  onChildEvent(value: number) {
    console.log('catch in parent', value);
    this.childValue = value;
  }
}
