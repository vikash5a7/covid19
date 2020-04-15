import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatRippleModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { WorldComponent } from './world/world.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import { IndiaComponent } from './india/india.component';
import { DisplaycountriesComponent } from './displaycountries/displaycountries.component';
import { SearchCountryPipe } from './pipe/search-country.pipe';
import { StateDetailsComponent } from './state-details/state-details.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { PatientComponent } from './patient/patient.component';
import { SearchStatePipe } from './pipe/search-state.pipe';
import { AboutComponent } from './about/about.component';
import { StateFacilityPipe } from './pipe/state-facility.pipe';
import { CityFacilityPipe } from './pipe/city-facility.pipe';
import { PagenotefoundComponent } from './pagenotefound/pagenotefound.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { HelfullinkComponent } from './helfullink/helfullink.component';
@NgModule({
  declarations: [
    AppComponent,
    NavigationbarComponent,
    WorldComponent,
    IndiaComponent,
    DisplaycountriesComponent,
    SearchCountryPipe,
    StateDetailsComponent,
    FacilitiesComponent,
    PatientComponent,
    SearchStatePipe,
    AboutComponent,
    StateFacilityPipe,
    CityFacilityPipe,
    PagenotefoundComponent,
    SpinnerComponent,
    HelfullinkComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatExpansionModule,
    MatRippleModule,
    FormsModule,
    MatTableModule,
    HttpClientModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    FlexLayoutModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
