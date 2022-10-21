import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {City} from '../model/address/city';
import {TokenStorageService} from "./token-storage.service";

@Injectable({
  providedIn: 'root'
})
export class CityService {
  token = '';
  httpOptions: any;

  constructor(private httpClient: HttpClient, private jwtService: TokenStorageService) {
    this.token = jwtService.getJwt();
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.token
      })
    };
  }

  findAll(): Observable<City[]> {
    // @ts-ignore
    return this.httpClient.get<City[]>("http://localhost:8080/api/public/cities", this.httpOptions);
  }
}
