import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reversString',
  standalone: true
})
export class ReversStringPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.split('').reverse().join('');
  }

}
