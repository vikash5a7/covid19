import { Component } from '@angular/core';
import { BackendApiService } from '../services/backend-api.service';
import { World } from '../model/world';
import { Regional } from '../model/regional';

@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.css']
})
export class NavigationbarComponent {
  showFiller = false;
  world:any;
  region: Regional = new Regional();
  indiaData: [];
  worldStatus=true;

  constructor(private backendApiService : BackendApiService) {
 }
 ngOnInit() {
  this.backendApiService.getAllDataOfIndia().subscribe((data:any)=>{
    this.indiaData = data.data.regional;
    console.log('Data of india-->'+ this.indiaData);
  })
}
}
