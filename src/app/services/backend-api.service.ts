import { Injectable } from '@angular/core';
import { Country } from '../model/country';
import { environment } from 'src/environments/environment';
import { Subject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {

  private GLOBAL_aPI = environment.GLOBAL_API;
  private REST_API_SERVER = "https://coronavirus-19-api.herokuapp.com/all";
  constructor(private httpClient: HttpClient, ) { }
  private httpOtions = {
    headers: new HttpHeaders({ 'content-type': 'application/json' })
  };
  public sendGetRequest(){
    return this.httpClient.get(this.REST_API_SERVER);
  }

}
