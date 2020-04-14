import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stateFacility'
})
export class StateFacilityPipe implements PipeTransform {

  transform(resoucesList: any, SearchTeram1: String){
    if(!resoucesList|| !SearchTeram1){
      return resoucesList;
    }
    return resoucesList.filter(
      resource=>resource.state.toLowerCase().indexOf(SearchTeram1.toLowerCase())!==-1);
  }
}
