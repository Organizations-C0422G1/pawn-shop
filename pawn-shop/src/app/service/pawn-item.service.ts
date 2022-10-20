import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DetailPawn} from "../dto/detail-pawn";

@Injectable({
  providedIn: 'root'
})
export class PawnItemService {

  private URL_PAWN = 'http://localhost:8080/api/employee/pawnItemRest'

  constructor(private http: HttpClient) {
  }

  getAllPawnItem(itemName: string, pawnName: string, page: number): Observable<any> {
    return this.http.get<any>(this.URL_PAWN + "?page=" + page + "&itemName=" + itemName + "&pawnName=" + pawnName);
  }

  findById(id: number): Observable<DetailPawn> {
    return this.http.get<DetailPawn>(`${this.URL_PAWN}detail/${id}`);
  }

}
