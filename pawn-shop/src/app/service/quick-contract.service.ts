import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {QuickContractDto} from '../model/dto/quick-contract-dto';

@Injectable({
  providedIn: 'root'
})
export class QuickContractService {

  constructor(private httpClient: HttpClient) {
  }

  createQuickContract(quickContractDto: QuickContractDto) {
    return this.httpClient.post('http://localhost:8080/api/employee/contracts/createQuickContract', quickContractDto);
  }
}
