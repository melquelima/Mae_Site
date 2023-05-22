import { ListJsonUniquePipe } from './pipes/listJsonUnique.pipe';
import { ListJsonGroupPipe } from './pipes/list-json-group.pipe';
import { ListJsonFilter } from './pipes/listJsonFilter.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArraySortPipe } from './pipes/array-sort.pipe';
import { ListQueryPipe } from './pipes/list-query.pipe';
import { DateSqlFormatPipe } from './pipes/date-sql-format.pipe';
import { DateHourSqlFormatPipe } from './pipes/date-hour-sql-format.pipe';



@NgModule({
  declarations: [
    ArraySortPipe,
    ListJsonFilter,
    ListJsonGroupPipe,
    ListJsonUniquePipe,
    ListQueryPipe,
    DateSqlFormatPipe,
    DateHourSqlFormatPipe
  ],
  imports: [
    CommonModule
  ],exports:[
    ArraySortPipe,
    ListJsonFilter,
    ListJsonGroupPipe,
    ListJsonUniquePipe,
    ListQueryPipe,
    DateSqlFormatPipe
  ]
})
export class PipesModule { }
