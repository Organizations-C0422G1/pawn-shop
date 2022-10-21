import { Injectable } from '@angular/core';
import {Customer} from "../model/customer/customer";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {TokenStorageService} from "./token-storage.service";
import {City} from "../model/address/city";
import {District} from "../model/address/district";
import {Address} from "../model/address/address";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  token = '';
  httpOptions: any;

  private URL_CUSTOMER = 'http://localhost:8080/api/employee/customer'

  constructor(private http: HttpClient, private  jwtService: TokenStorageService) {
    this.token = jwtService.getJwt();
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.token
      })
    };
  }
  getAllCustomer(name: string, page: number): Observable<any> {
    return this.http.get<any>(this.URL_CUSTOMER + "?page=" + page + "&name=" + name,this.httpOptions)
  }

  deleteCustomer(id: any):Observable<Customer> {
    console.log(id)
    return this.http.delete<Customer>(this.URL_CUSTOMER + '/' +id);
  }

  createNewCustomer(customer: Customer) {
    return this.http.post('http://localhost:8080/api/employee/pawnShop/goCreateCustomer', customer);
  }

  getAllCity(): Observable<City[]> {
    return this.http.get<City[]>('http://localhost:8080/api/employee/pawnShop/goFindCity');
  }

  getAllDistrict(id: number): Observable<District[]> {
    return this.http.get<District[]>('http://localhost:8080/api/employee/pawnShop/goFindDistrict?city=' + id);
  }

  getCityById(id: number): Observable<City> {
    return this.http.get('http://localhost:8080/api/employee/pawnShop/findCityById?id=' + id);
  }

  saveAddress(address: Address) {
    return this.http.post<Address>('http://localhost:8080/api/employee/pawnShop/saveAddress', address);
  }

  findCustomerById(id: number): Observable<Customer> {
    return this.http.get<Customer>('http://localhost:8080/api/employee/pawnShop/findCustomer?id=' + id);
  }

  updateCustomer(customer: Customer) {
    return this.http.patch('http://localhost:8080/api/employee/pawnShop/goUpdateCustomer', customer);
  }
}

