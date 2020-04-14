import { Component, OnInit, Input } from '@angular/core';
import { Regional } from '../model/regional';
import { BackendApiService } from '../services/backend-api.service';
import { Data } from '../model/data';

@Component({
  selector: 'app-state-details',
  templateUrl: './state-details.component.html',
  styleUrls: ['./state-details.component.css']
})
export class StateDetailsComponent implements OnInit {
  region: Regional = new Regional();
  data: Data = new Data();
  indiaData: [];
  SearchTeram : String;
  details: any;
  constructor(private backendApiService : BackendApiService) {
  }
  ngOnInit() {
    this.backendApiService.getAllDataOfIndia().subscribe((data:any)=>{
      this.indiaData = data.data.regional;
      this.data = data;
      console.log('Data of india-->'+ this.indiaData);
      console.log("this date is---->" + this.details)
    })
  }
}
