import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacilitiesComponent } from './facilities/facilities.component';
import { PatientComponent } from './patient/patient.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { PagenotefoundComponent } from './pagenotefound/pagenotefound.component';
import { IndiaComponent } from './india/india.component';
import { HomeComponent } from './home/home.component';
import { HelfullinkComponent } from './helfullink/helfullink.component';
import { AboutComponent } from './about/about.component';
import { LaoderComponent } from './laoder/laoder.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'crona-app',
    pathMatch: 'full'
  },
{
  path: 'crona-app', component: HomeComponent
},
{
  path: 'status', component: PatientComponent
},{
  path: 'india-details', component: IndiaComponent
},
{
  path: 'need-help', component: FacilitiesComponent
},
{
  path: 'helpful-link', component: HelfullinkComponent
},
{
  path: 'about', component: AboutComponent
},
{
  path: 'loading', component: LaoderComponent
},
{
  path: '**',
  component:  PagenotefoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


