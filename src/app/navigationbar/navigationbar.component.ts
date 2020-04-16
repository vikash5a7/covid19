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
  constructor(private backendApiService : BackendApiService) {
 }
 ngOnInit() {

}}
