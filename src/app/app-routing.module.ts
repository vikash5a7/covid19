import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacilitiesComponent } from './facilities/facilities.component';
import { PatientComponent } from './patient/patient.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'track',
    pathMatch: 'full'
  },
  {
    path: 'Facilities', component: FacilitiesComponent
  },
  {
      path: 'Facilities', component: FacilitiesComponent
  },
  {
    path: 'patient', component: PatientComponent
},
{
  path: 'track', component: NavigationbarComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


