import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertAge',
  standalone: true
})
export class ConvertAgePipe implements PipeTransform {

  transform(value: number, ...args: string[]): unknown {
    console.log('args', args)
    let convertInto = args[0] === 'month' ? 12 : 365;
    let convert = value * convertInto;
    return convert;
  }

}
