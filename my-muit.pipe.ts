import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myMuit'
})
export class MyMuitPipe implements PipeTransform {

  transform(value: number, numberToMultiply: number): number {
    return value * numberToMultiply;
  }

}
