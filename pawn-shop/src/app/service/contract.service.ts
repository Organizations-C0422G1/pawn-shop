import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../model/customer/customer";
import {PawnItem} from "../model/pawn/pawn-item";
import {PawnType} from "../model/pawn/pawn-type";
import {Contract} from "../model/contract/contract";

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor(private http: HttpClient) {
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
