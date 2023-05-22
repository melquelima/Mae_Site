import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listJsonUnique'
})
export class ListJsonUniquePipe implements PipeTransform {

  transform(items: Object[], field: string): any {
    if (!items || !field) {
        return items;
    }
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    const control = []
    const ret = []

    for(var i = 0;i<items.length;i++){
        if(!control.includes(items[i][field])){
          control.push(items[i][field])
          ret.push(items[i])
        }
    }
    return ret
}
}
