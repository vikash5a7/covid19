import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'searchCountry'
})
export class SearchCountryPipe implements PipeTransform {
  transform(CountryList: any, SearchTeram: String){
    if(!CountryList|| !SearchTeram){
      return CountryList;
    }
    return CountryList.filter(
      Country=>Country.country.toLowerCase().indexOf(SearchTeram.toLowerCase())!==-1);
  }
}
