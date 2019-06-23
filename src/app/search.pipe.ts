import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'areaSearch'
})
export class SearchPipe implements PipeTransform {

  transform(areas:any, searchFilter:string ):any {
    if(!areas || !searchFilter){
      return areas;
    }
      return areas.filter(area => area.name.toLowerCase().indexOf(searchFilter.toLowerCase()) !== -1 );
  }

}
