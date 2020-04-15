import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacilitiesComponent } from './facilities/facilities.component';
import { PatientComponent } from './patient/patient.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { PagenotefoundComponent } from './pagenotefound/pagenotefound.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'crona-app',
    pathMatch: 'full'
  },
{
  path: 'crona-app', component: NavigationbarComponent
},
{
  path: '**',
  component:  NavigationbarComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


