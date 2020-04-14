import { Component, OnInit } from '@angular/core';
import { BackendApiService } from '../services/backend-api.service';
import { Country } from '../model/country';

@Component({
  selector: 'app-displaycountries',
  templateUrl: './displaycountries.component.html',
  styleUrls: ['./displaycountries.component.css']
})
export class DisplaycountriesComponent implements OnInit {
  country : Country = new Country();
  CountryList : [];
  SearchTeram : String;

  constructor(private backendApiService : BackendApiService) {
  }

 ngOnInit() {
   this.backendApiService.getAllCountriesData().subscribe((data:any)=>{
    this.CountryList=data;
     console.log("all Countries data is " + this.CountryList)
   })
}
}
