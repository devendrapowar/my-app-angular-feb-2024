import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  @Input() parentValue!: string;
  @Output() childEvent = new EventEmitter();
  public count: number = 0;

  onClick() {
    console.log('child click');
    this.count++;
    this.childEvent.emit(this.count);
  }
}
