import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PawnTypeService {

  private URL_PAWN_TYPE = 'http://localhost:8080/api/employee/pawnTypeRest'

  constructor(private http: HttpClient) {
  }

  getAllPawnType(): Observable<any> {
    return this.http.get(this.URL_PAWN_TYPE + '/list');
  }

}
