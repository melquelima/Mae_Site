import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateHourSqlFormat'
})
export class DateHourSqlFormatPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
