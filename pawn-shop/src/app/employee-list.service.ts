import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from './model/employee/employee';
import {environment} from '../environments/environment';


const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class EmployeeListService {

  constructor(private httpClient: HttpClient) {
  }

  getAllEmployee(searchKeyWordName: string, searchKeyWordCode: string, pageable: number) {
    return this.httpClient.get(API_URL + '/list?name=' + searchKeyWordName +
      '&employeeCode=' + searchKeyWordCode + '&page=' + pageable);
  }

  deleteEmployee(id: number): Observable<Employee> {
    // @ts-ignore
    return this.httpClient.patch<Employee>(API_URL + '/delete/' + id);
  }
}
