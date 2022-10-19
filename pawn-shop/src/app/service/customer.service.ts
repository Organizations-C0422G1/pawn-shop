import { Injectable } from '@angular/core';
import {Customer} from "../model/customer/customer";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private URL_CUSTOMER = 'http://localhost:8080/api/employee/customer'
  constructor(private http: HttpClient) { }
  getAllCustomer(name: string, page: number): Observable<any> {
    return this.http.get<any>(this.URL_CUSTOMER + "?page=" + page + "&name=" + name)
  }

  deleteCustomer(id: any):Observable<Customer> {
    console.log(id)
    return this.http.delete<Customer>(this.URL_CUSTOMER + '/' +id);
  }
}
