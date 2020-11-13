import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'durationTrans'})
export class DurationPipe implements PipeTransform {
  transform (input:number) {
    let hours = Math.round(input/60);
    let minutes = input % 60
    return `${hours}h ${minutes}min`
  }
}
