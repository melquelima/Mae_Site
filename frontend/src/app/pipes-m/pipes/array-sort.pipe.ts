import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "sort"
})
export class ArraySortPipe  implements PipeTransform {
  transform(array: any, field: string): any[] {
    if (!Array.isArray(array)) {
      return;
    }
    array.sort((a: any, b: any) => {
      if(!this.propExists(a,field)) {console.log("deu ruim 1");return -1}
      if(!this.propExists(b,field)) {console.log("deu ruim 2");return -1}
      if (this.getByString(a,field) < this.getByString(b,field)) {
        return -1;
      } else if (this.getByString(a,field) > this.getByString(b,field)) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }


  propExists(obj:Object,key:string):boolean{
    const keys = key.split('.')
    var currObj = obj

    
    if(!currObj) return false


    for(var i=0;i<keys.length;i++){
      if(currObj == null) return false
      if(currObj.hasOwnProperty(keys[i])){
        currObj = currObj[keys[i]]
      }else{
        return false
      }
    }
    return true
  }

  getByString(o, s) {
    s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
    s = s.replace(/^\./, '');           // strip a leading dot
    var a = s.split('.');
    for (var i = 0, n = a.length; i < n; ++i) {
        var k = a[i];
        if (k in o) {
            o = o[k];
        } else {
            return;
        }
    }
    return o;
}

}