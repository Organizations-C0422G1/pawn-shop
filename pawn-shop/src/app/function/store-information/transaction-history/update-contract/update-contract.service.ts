import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Contract} from '../../../../model/contract/contract';
import {HttpClient} from '@angular/common/http';
import {Customer} from '../../../../model/customer/customer';
import {PawnType} from '../../../../model/pawn/pawn-type';

@Injectable({
  providedIn: 'root'
})
export class UpdateContractService {
  API_URL = 'http://localhost:8080/';
  constructor(private http: HttpClient) { }

  findById(id: number): Observable<Contract> {
    return this.http.get<Contract>(this.API_URL + 'api/employee/contracts/contract/' + id);
  }
  updateContract(contract: Contract): Observable<Contract> {
    return this.http.patch<Contract>(this.API_URL + 'api/employee/contracts/update-contract', contract);
  }
  getCustomer(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.API_URL + 'getCustomerToEdit');
  }

  getPawnType(): Observable<PawnType[]> {
    return this.http.get<PawnType[]>(this.API_URL + 'api/employee/contracts/pawntypelist');
  }
}
