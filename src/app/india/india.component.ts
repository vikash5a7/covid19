import { Component, OnInit } from '@angular/core';
import { BackendApiService } from '../services/backend-api.service';

@Component({
  selector: 'app-india',
  templateUrl: './india.component.html',
  styleUrls: ['./india.component.css']
})
export class IndiaComponent implements OnInit {
  india:any;
  constructor(private backendApiService : BackendApiService) {
  }

 ngOnInit() {
   this.backendApiService.getIndiaData().subscribe((data)=>{
     this.india=data;
     console.log('india data is'+ this.india)
   })
}

}
