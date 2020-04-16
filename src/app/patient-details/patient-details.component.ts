import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PatientComponent } from '../patient/patient.component';
import { DeathsRecoveries } from '../model/deaths-recoveries';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {
  deathAndRecoveries: DeathsRecoveries = new DeathsRecoveries();
  constructor(
    public _matDialogRef: MatDialogRef<PatientComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.deathAndRecoveries=data.deathAndRecoveries;
  }

  ngOnInit(): void {
  }

    close() {
      console.log('dialogue closed')
      this._matDialogRef.close();
  }

}
