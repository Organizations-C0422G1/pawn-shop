import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Finance} from "../model/finance/finance";


@Injectable({
  providedIn: 'root'
})
export class FinanceService {

  private URL_FINANCE = 'http://localhost:8080/api/admin/finance'

  constructor(private http: HttpClient) {
  }

  getAllFinance(): Observable<Finance[]> {
    return this.http.get<Finance[]>(this.URL_FINANCE);
  }

  getInvestment(): Observable<number> {
    return this.http.get<number>(this.URL_FINANCE + '/investment');
  }

  getExpectedProfit(): Observable<number> {
    return this.http.get<number>(this.URL_FINANCE + '/profit');
  }

}
