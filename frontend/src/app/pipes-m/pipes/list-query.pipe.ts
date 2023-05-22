import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listQuery'
})
export class ListQueryPipe implements PipeTransform {

    public transform(value, keys: string, term: string) {
  
      if (!term) return value;
      return (value || []).filter(item => keys.split(',').some(key => {
        return this.propExists(item,key) && new RegExp(term, 'gi').test(this.getByString(item,key))
      }));
  
    }

    private propExists(obj:Object,key:string):boolean{
      const keys = key.split('.')
      var currObj = obj

      for(var i=0;i<keys.length;i++){
        if(currObj.hasOwnProperty(keys[i])){
          currObj = currObj[keys[i]]
        }else{
          return false
        }
      }
      return true
    }

    private getByString(o, s) {
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





//<input [(ngModel)]="query">
//<div *ngFor="let item of items | listQuery:'id,text':query">{{item.text}}</div>