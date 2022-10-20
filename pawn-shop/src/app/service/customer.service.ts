import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Customer} from '../model/customer/customer';
import {Observable} from 'rxjs';
import {City} from '../model/address/city';
import {District} from '../model/address/district';
import {Address} from '../model/address/address';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) {
  }

  createNewCustomer(customer: Customer) {
    return this.httpClient.post('http://localhost:8080/api/employee/pawnShop/goCreateCustomer', customer);
  }

  getAllCity(): Observable<City[]> {
    return this.httpClient.get<City[]>('http://localhost:8080/api/employee/pawnShop/goFindCity');
  }

  getAllDistrict(id: number): Observable<District[]> {
    return this.httpClient.get<District[]>('http://localhost:8080/api/employee/pawnShop/goFindDistrict?city=' + id);
  }

  getCityById(id: number): Observable<City> {
    return this.httpClient.get('http://localhost:8080/api/employee/pawnShop/findCityById?id=' + id);
  }

  saveAddress(address: Address) {
    return this.httpClient.post<Address>('http://localhost:8080/api/employee/pawnShop/saveAddress', address);
  }

  findCustomerById(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>('http://localhost:8080/api/employee/pawnShop/findCustomer?id=' + id);
  }

  updateCustomer(customer: Customer) {
    return this.httpClient.patch('http://localhost:8080/api/employee/pawnShop/goUpdateCustomer', customer);
  }
}
