import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cityFacility'
})
export class CityFacilityPipe implements PipeTransform {

  transform(resoucesList: any, SearchTeram: String){
    if(!resoucesList|| !SearchTeram){
      return resoucesList;
    }
    return resoucesList.filter(
      resource=>resource.city.toLowerCase().indexOf(SearchTeram.toLowerCase())!==-1);
  }
}
