import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Contract} from '../model/finance/contract';

@Injectable({
  providedIn: 'root'
})
export class LiquidationContractService {

  private URL_LIQUIDATION_CONTRACT = 'http://localhost:8080/api/employee/interestRest/liquidation-contract';

  constructor(private http: HttpClient) {
  }

  findLiquidationContractByDate(startReturnDate: string, endReturnDate: string, page: number): Observable<any> {
    return this.http.get(this.URL_LIQUIDATION_CONTRACT + '?page='
      + page + '&startReturnDate=' + startReturnDate + '&endReturnDate=' + endReturnDate);
  }

  findContractById(id: number): Observable<Contract> {
    return this.http.get<Contract>('http://localhost:8080/api/employee/interestRest' + '/' + id);
  }

  getListLiquidationContractByDate(startReturnDate: string, endReturnDate: string): Observable<any> {
    return this.http.get('http://localhost:8080/api/employee/interestRest/liquidation-contract/list'
      + '?startReturnDate=' + startReturnDate + '&endReturnDate=' + endReturnDate);
  }
}
