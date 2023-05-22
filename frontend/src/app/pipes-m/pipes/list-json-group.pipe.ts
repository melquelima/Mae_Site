import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listJsonGroup'
})
export class ListJsonGroupPipe implements PipeTransform {

  transform(items: Object[], qtd: number): any {
    if (!items || !qtd) {
        return items;
    }
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    var control = []
    var ret = []

    for(var i = 0;i<items.length;i++){
      control.push(items[i])
      if(control.length == qtd){
        ret.push(control)
        control = []
      }
    }
    if(control.length >0) ret.push(control)

    return ret
  }

}
