import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Contract} from '../model/contract/contract';
import {Observable} from 'rxjs';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor(private http: HttpClient) {
  }

  getAllPaginationAndSearch(index: number, code: string, customerName: string, pawnItem: string, startDate: string): Observable<Contract[]> {
    return this.http.get<Contract[]>(API_URL + '/api/employee/contracts/listPage?page=' + index + '&code='
      + code + '&customerName=' + customerName + '&pawnItem=' + pawnItem + '&startDate=' + startDate);
  }

  getAllNotPagination(): Observable<Contract[]> {
    return this.http.get<Contract[]>(API_URL + '/api/employee/contracts/listNotPagination');
  }

  returnItem(id: number, email: string, customerName: string, liquidationPrice: string): Observable<Contract> {
    return this.http.get<Contract>(API_URL + '/api/employee/contracts/returnItem/'
      + id + '?email=' + email + '&customerName=' + customerName + '&liquidationPrice=' + liquidationPrice);
  }
}

