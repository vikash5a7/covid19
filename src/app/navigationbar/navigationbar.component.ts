import { Component } from '@angular/core';
import { BackendApiService } from '../services/backend-api.service';
import { World } from '../model/world';

@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.css']
})
export class NavigationbarComponent {
  showFiller = false;
  world:any;
  constructor(private backendApiService : BackendApiService) {
 }
ngOnInit() {
  this.backendApiService.sendGetRequest().subscribe((data: any[])=>{
    this.world=data;
    console.log('Total number of case is ' +this.world.cases)
    console.log(data);
  })
}
}
