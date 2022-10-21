import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "../../environments/environment";

const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class TransactionListService {

  constructor(private httpClient: HttpClient) { }

  getPageContract(page:number, customerName: string, pawnItemName: string,
                  type: string, startDate: string,
                  endDate: string, status: string): Observable<any>{
    if (customerName == "#"
      || customerName == "%"
      || customerName == "^"
      || customerName == "&"
      || customerName == "+"
      || customerName == "_"
      || customerName == "{}"
      || pawnItemName == "#"
      || pawnItemName == "%"
      || pawnItemName == "^"
      || pawnItemName == "&"
      || pawnItemName == "+"
      || pawnItemName == "_"
      || pawnItemName == "{}" ){
        customerName = "?";
        pawnItemName = "?";
    }
    if (startDate == null){
      startDate = "0000-00-00";
    }
    if (endDate == null){
      endDate = "2032-01-01";
    }
    return this.httpClient.get<any>(API_URL + "/api/employee/contracts?page="+ page + "&customerName=" + customerName +
    "&pawnItemName=" + pawnItemName + "&type=" + type + "&startDate=" + startDate + "&endDate=" + endDate + "&status=" + status);
  }


  getContractDetail(id: number): Observable<any>{
    return this.httpClient.get<any>(`${API_URL}/api/employee/contracts/${id}`);
  }

  deleteContract(id: number): Observable<any>{
    return this.httpClient.patch<any>(`${API_URL}/api/employee/contracts/${id}`, null);
  }
}
