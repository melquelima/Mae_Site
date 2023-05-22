import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateSqlFormat'
})
export class DateSqlFormatPipe implements PipeTransform {
  
  transform(value: string): unknown {
    const frm = value.split("-")
    const date = new Date(parseInt(frm[0]), parseInt(frm[1])-1, parseInt(frm[2]))

    return [
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
      date.getFullYear(),
    ].join('/');
  }

  

}

function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}