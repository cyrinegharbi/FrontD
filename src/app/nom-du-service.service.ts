import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { piste } from './Piste';

@Injectable({
  providedIn: 'root'
})
export class NomDuServiceService {

 
  readonly API_URL = 'http://192.168.50.4:8089/api/piste';

  constructor(private httpClient: HttpClient) { }
  getAllPiste() {
    return this.httpClient.get(`${this.API_URL}/all`)
  }
  addPiste(piste : any) {
    return this.httpClient.post(`${this.API_URL}/add`, piste)
  }


  
}