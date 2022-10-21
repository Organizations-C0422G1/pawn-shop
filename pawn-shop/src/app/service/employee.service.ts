import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Employee} from '../model/employee/employee';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) {
  }

  findByUser(user: string) {
    return this.http.get('http://localhost:8080/api/employee/findUser/' + user);
  }

  update(employee: Employee): Observable<Employee> {
    return this.http.patch<Employee>('http://localhost:8080/api/employee/update', employee);
  }
}
