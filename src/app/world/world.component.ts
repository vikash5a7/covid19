import { Component, OnInit } from '@angular/core';
import { BackendApiService } from '../services/backend-api.service';
import { World } from '../model/world';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css']
})
export class WorldComponent implements OnInit {
  world:any;
  constructor(private backendApiService : BackendApiService) {
  }

 ngOnInit() {
   this.backendApiService.sendGetRequest().subscribe((data)=>{
     this.world=data;
   })
}
}
