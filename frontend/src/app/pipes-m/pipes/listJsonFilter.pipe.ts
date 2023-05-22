
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'listJsonFilter',
    pure: false
})
export class ListJsonFilter implements PipeTransform {
    transform(items: any[], filter: Object): any {
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        const dt =  items.filter(item =>this.filterValues(item,filter));
        return dt
    }

    filterValues(json:Object,filter:Object):boolean{
        const keys = Object.keys(filter)
        const json_keys = Object.keys(json)
        for(var i = 0;i<keys.length;i++){
            if(!json_keys.includes(keys[i])) return false
            if(!(json[keys[i]] == filter[keys[i]])) return false
        }
        return true
    }
}