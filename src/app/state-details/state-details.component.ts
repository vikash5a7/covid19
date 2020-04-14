import { Component, OnInit, Input } from '@angular/core';
import { Regional } from '../model/regional';
import { BackendApiService } from '../services/backend-api.service';

@Component({
  selector: 'app-state-details',
  templateUrl: './state-details.component.html',
  styleUrls: ['./state-details.component.css']
})
export class StateDetailsComponent implements OnInit {
  region: Regional = new Regional();
  indiaData: [];
  constructor(private backendApiService : BackendApiService) {
  }
  ngOnInit() {
    this.backendApiService.getAllDataOfIndia().subscribe((data:any)=>{
      this.indiaData = data.data.regional;
      console.log('Data of india-->'+ this.indiaData);
    })
  }
}
