import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {TokenStorageService} from "./token-storage.service";

@Injectable({
  providedIn: 'root'
})
export class LiquidationServiceService {
  token = '';
  httpOptions: any;
  constructor(private httpClient: HttpClient, private  jwtService: TokenStorageService) {
    this.token = jwtService.getJwt();
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.token
      })
    };
  }

  findAllPawnItem(object: any): Observable<any> {
    return this.httpClient.get(`http://localhost:8080/api/employee/liquidation/pawnItem/list?namePawnItem=${object.namePawnItem}&idPawnType=${object.idPawnType}&price=${object.price}`,this.httpOptions)
  }

  findAllPawnType():Observable<any>{
    return this.httpClient.get(`http://localhost:8080/api/employee/liquidation/pawnType/list`,this.httpOptions);
  }

  updateLiquidation(object:any):Observable<any>{
    return this.httpClient.patch("http://localhost:8080/api/employee/liquidation/update",object,this.httpOptions);
  }
}
