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
  private INDIADATA_API = environment.INDIADATA_API;
  constructor(private httpClient: HttpClient, ) { }
  private httpOtions = {
    headers: new HttpHeaders({ 'content-type': 'application/json' })
  };

  public sendGetRequest(){
    return this.httpClient.get(this.GLOBAL_aPI);
  }
  public getIndiaData(){
    return this.httpClient.get(this.INDIADATA_API);
  }

}
