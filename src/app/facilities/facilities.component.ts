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
  resource: Resources=new Resources();
  constructor(private backendApiService : BackendApiService) {
  }

 ngOnInit() {
   this.backendApiService.getResouce().subscribe((data:any)=>{
    this.resoucesList=data.resources;
     console.log("resouce is  " +this.resoucesList)
   })
}
}
