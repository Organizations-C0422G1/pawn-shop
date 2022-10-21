import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Contract} from '../model/contract/contract';
import {Observable} from 'rxjs';
import {Customer} from "../model/customer/customer";
import {PawnType} from "../model/pawn/pawn-type";
import {PawnItem} from "../model/pawn/pawn-item";

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
  findAllCustomer(): Observable<Customer[]> {
    return this.http.get<Customer[]>('http://localhost:8080/customer/list');
  }

  findAllPawnType(): Observable<PawnType[]> {
    return this.http.get<PawnType[]>('http://localhost:8080/contract/pawnType');
  }

  search(idCard: string): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/findCustomerByIdCard?idCard=${idCard}`);
  }

  createPawnItem(pawnItem: PawnItem): Observable<PawnItem>{
    return this.http.post<PawnItem>("http://localhost:8080/pawnItem/addPawnItem" , pawnItem);
  }


  createContract(value: any) {
    return this.http.post('http://localhost:8080/api/employee/contracts/create', value);
  }

}

