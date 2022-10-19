import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {City} from '../model/address/city';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private httpClient: HttpClient) {
  }

  findAll(): Observable<City[]> {
    return this.httpClient.get<City[]>("http://localhost:8080/cities");
  }
}
