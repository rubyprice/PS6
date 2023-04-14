import { Injectable } from '@angular/core';
import {UNIVERSITY} from '../models/uniModel';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {UNIVERSITIES} from "../mock/UNI-MOCK";

@Injectable({
  providedIn: 'root'
})
export class UniServiceService {
  uniEndpoint = 'http://localhost:3000/api'

  useLocalUnis : boolean = false;//uncomment to use local contacts
  universities = UNIVERSITIES;
  getUnis(): Observable<UNIVERSITY[]> {
    if (!this.useLocalUnis) {
      return this.httpClient.get<UNIVERSITY[]>(this.uniEndpoint); }
    else {
      return of(this.universities);
    }
  }



  constructor(private httpClient: HttpClient) {}


}
