import { Pipe, PipeTransform } from '@angular/core';
import { Country } from '../model/country';

@Pipe({
  name: 'searchCountry'
})
export class SearchCountryPipe implements PipeTransform {
  transform(CountryList: any, SearchTeram: String){
    console.log("searching words are--"+ SearchTeram);
    if(!CountryList|| !SearchTeram){
      return CountryList;
    }
    return CountryList.filter(
      Country=>Country.country.toLowerCase().indexOf(SearchTeram.toLowerCase())!==-1);
  }
}
