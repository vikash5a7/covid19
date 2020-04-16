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
  isLoading = false;
  constructor(private backendApiService : BackendApiService) {
  }
  ngOnInit() {
    this.gettingAllTheDAtaOFIndia();

  }

  gettingAllTheDAtaOFIndia()
  {
    this.isLoading = true;
    this.backendApiService.getAllDataOfIndia().subscribe(
     data => this.handleResponse(data),
     error => this.handleError(error)
    );
  }
  handleError(error: any): void {
    console.log(error);
  }
  handleResponse(data: any): void {
    this.indiaData = data.data.regional;
    this.data = data;
    this.isLoading=false;
  }
}
