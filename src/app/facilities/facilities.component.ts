import { Component, OnInit } from '@angular/core';
import { BackendApiService } from '../services/backend-api.service';
import { Regional } from '../model/regional';
import { Resources } from '../model/resources';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.css']
})
export class FacilitiesComponent implements OnInit {
  resoucesList:[];
  SearchTeram: String;
  SearchTeram1: String;
  isLoading:false;
  resource: Resources=new Resources();
  constructor(private backendApiService : BackendApiService) {
  }

 ngOnInit() {
  this.gettingAllTheResources();
}


gettingAllTheResources() {
  this.backendApiService.getResouce().subscribe(
   data => this.handleResponse(data),
   error => this.handleError(error)
 );

}
handleError(error: any): void {
  this.isLoading = false;
  console.log(error);
}
handleResponse(data: any): void {
  this.resoucesList=data.resources;
  this.isLoading = false;
}
}
