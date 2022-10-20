import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Contract} from '../../../model/contract/contract';

@Injectable({
  providedIn: 'root'
})
export class TopTenTransactionService {

  API_URL = 'http://localhost:8080/';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Contract[]> {
    return this.http.get<Contract[]>(this.API_URL + `api/employee/contracts/top10Contract`);
  }
}
