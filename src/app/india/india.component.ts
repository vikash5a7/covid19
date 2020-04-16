import { Component, OnInit } from '@angular/core';
import { BackendApiService } from '../services/backend-api.service';

@Component({
  selector: 'app-india',
  templateUrl: './india.component.html',
  styleUrls: ['./india.component.css']
})
export class IndiaComponent implements OnInit {
  india:any;
  isLoading = false;
  constructor(private backendApiService : BackendApiService) {
  }

 ngOnInit() {
  this.gettingIndiaData();

}
  gettingIndiaData() {
    // this.backendApiService.getIndiaData().subscribe((data)=>{
    //   this.india=data;
    //   console.log('india data is'+ this.india)
    // })
    this.isLoading = true;
    this.backendApiService.getIndiaData().subscribe(
     data => this.handleResponse(data),
     error => this.handleError(error)
   );

  }
  handleError(error: any): void {
    this.isLoading = false;
    console.log(error);
  }
  handleResponse(data: Object): void {
    this.india=data;
    this.isLoading = false;
    console.log('india data is'+ this.india)
  }
}
