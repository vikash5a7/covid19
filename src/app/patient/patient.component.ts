import { Component, OnInit } from '@angular/core';
import { BackendApiService } from '../services/backend-api.service';
import { DeathsRecoveries } from '../model/deaths-recoveries';
import { MatDialog } from '@angular/material/dialog';
import { PatientDetailsComponent } from '../patient-details/patient-details.component';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  patientsList:[];
  deathAndRecoveries: DeathsRecoveries = new DeathsRecoveries();
  constructor(private backendApiService : BackendApiService,
              public dialog: MatDialog,
    ) {
  }
  order = "slno";
  reverse = true;
  maleFemale: false;

 ngOnInit() {
   this.backendApiService.deathAndRecoveries().subscribe((data:any)=>{
    this.patientsList=data.deaths_recoveries;
     console.log("All the patients " + this.patientsList)
   })
}


openDialog(deathAndRecoveries) {
  console.log(" The Record is ", deathAndRecoveries);
  const matDialogueReference = this.dialog.open(PatientDetailsComponent, {
    width: "500px",
    height: "auto",
    panelClass: "custom-dialog-container",
    data: { deathAndRecoveries }
  });
  matDialogueReference.afterClosed().subscribe(result => {
  });
}
}
