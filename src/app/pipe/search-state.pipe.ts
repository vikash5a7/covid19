import { Pipe, PipeTransform } from '@angular/core';
import { Regional } from '../model/regional';

@Pipe({
  name: 'searchState'
})
export class SearchStatePipe implements PipeTransform {

  transform(indiaData: any, SearchTeram: String){
    console.log("the search value is "+ SearchTeram )
    if(!indiaData|| !SearchTeram){
      return indiaData;
    }
    return indiaData.filter(
      regional=>regional.loc.toLowerCase().indexOf(SearchTeram.toLowerCase())!==-1);
  }

}
