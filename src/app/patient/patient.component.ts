import { Component, OnInit } from '@angular/core';
import { BackendApiService } from '../services/backend-api.service';
import { DeathsRecoveries } from '../model/deaths-recoveries';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  patientsList:[];
  deathAndRecoveries: DeathsRecoveries = new DeathsRecoveries();

  constructor(private backendApiService : BackendApiService) {
  }

 ngOnInit() {
   this.backendApiService.deathAndRecoveries().subscribe((data:any)=>{
    this.patientsList=data.deaths_recoveries;
     console.log("All the patients " + this.patientsList)
   })

}}
