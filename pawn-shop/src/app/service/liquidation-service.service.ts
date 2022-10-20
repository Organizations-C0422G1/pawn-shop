import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LiquidationServiceService {

  constructor(private httpClient: HttpClient) {
  }

  findAllPawnItem(object: any): Observable<any> {
    return this.httpClient.get(`http://localhost:8080/api/employee/liquidation/pawnItem/list?namePawnItem=${object.namePawnItem}&idPawnType=${object.idPawnType}&price=${object.price}`)
  }

  findAllPawnType():Observable<any>{
    return this.httpClient.get(`http://localhost:8080/api/employee/liquidation/pawnType/list`);
  }

  updateLiquidation(object:any):Observable<any>{
    return this.httpClient.patch("http://localhost:8080/api/employee/liquidation/update",object);
  }
}
